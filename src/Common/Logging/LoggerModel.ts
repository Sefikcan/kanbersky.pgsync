import { HttpException } from "@nestjs/common";

export interface LoggerModel {
    code: any,
    statusCode: number,
    timestamp: string,
    path: string,
    method: string,
    message: string,
    exception: HttpException,
    body: any
}