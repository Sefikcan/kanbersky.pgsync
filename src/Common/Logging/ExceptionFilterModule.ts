import { Module } from "@nestjs/common";
import { APP_FILTER } from "@nestjs/core";
import { EsErrorFilter } from "./Elasticsearch/EsErrorFilter";

@Module({
    providers: [
        {
            provide: APP_FILTER,
            useClass: EsErrorFilter
        }
    ],
})
export class ExceptionFilterModule {}