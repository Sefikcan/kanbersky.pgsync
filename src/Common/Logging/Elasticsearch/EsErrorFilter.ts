import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from "@nestjs/common";
import * as winston from "winston";
import { ElasticsearchTransport, LogData } from "winston-elasticsearch";
import { LoggerModel } from "../LoggerModel";
import EsFormat from "./EsFormat";

@Catch()
export class EsErrorFilter implements ExceptionFilter {
  private readonly logger: winston.Logger;
    constructor() {
      this.logger = winston.createLogger({
        level: 'info',
        format: winston.format.json(),
        transports: [
          new winston.transports.Console({
            level: 'info',
            format: winston.format.combine(
              winston.format.colorize({ message: true }),
              debugFormat({
                colorizeMessage: false // Already colored by 'winston.format.colorize'
              })),
            }),
          ]
        });
        
        const { ELASTICSEARCH_URLS } = process.env;
        if (ELASTICSEARCH_URLS) {
          const nodes = ELASTICSEARCH_URLS.split(',');
        
        function ElasticsearchTransformer({ message, level, timestamp, meta }: LogData) {
            return { message, level, timestamp, ...meta };
        }
        
        const elasticsearchTransport = new ElasticsearchTransport({
            transformer: ElasticsearchTransformer,
            clientOpts: { nodes } as any,
            indexPrefix: 'log',
            format: EsFormat(),
        });
        
        this.logger.add(elasticsearchTransport);
      }
    }

    catch(exception: HttpException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const request = ctx.getRequest();
        const response = ctx.getResponse();

        if(!response['status']) return;

        const loggerModel: LoggerModel = {
            code: exception['code'] || exception['response']?.data?.code || HttpStatus.INTERNAL_SERVER_ERROR,
            statusCode: exception['status'] || exception['response']?.status || HttpStatus.INTERNAL_SERVER_ERROR,
            timestamp: new Date().toLocaleDateString(),
            path: request.url,
            method: request.method,
            message: exception.message || null,
            body: request.body,
            exception: exception
        };

        response.status(loggerModel.statusCode).json(loggerModel);

        this.ThrowError(loggerModel);
    }

  private ThrowError(loggerModel: LoggerModel) {
    if (loggerModel.statusCode >= HttpStatus.INTERNAL_SERVER_ERROR) {
      this.logger.error(PrepareLoggerText(loggerModel), 'HttpErrorFilter');
    }
    else if (loggerModel.statusCode == HttpStatus.BAD_REQUEST) {
      this.logger.warn(PrepareLoggerText(loggerModel), 'HttpErrorFilter');
    }
    else if (loggerModel.statusCode == HttpStatus.NOT_FOUND) {
      this.logger.info(PrepareLoggerText(loggerModel), 'HttpErrorFilter');
    }
  }
}

function PrepareLoggerText(loggerModel: LoggerModel) {
  return `${JSON.stringify(loggerModel)} 
  Request Body: ${JSON.stringify(loggerModel.body)} 
  Exception: ${JSON.stringify(loggerModel.exception)}`;
}

function debugFormat(arg0: {
  colorizeMessage: boolean; // Already colored by 'winston.format.colorize'
}): winston.Logform.Format {
  throw new Error("Function not implemented.");
}
