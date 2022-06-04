import { UsePipes } from "@nestjs/common";
import { ObjectSchema } from "joi";
import { ValidationPipe } from "./ValidationPipe";

export const Validate = (schema: ObjectSchema) => UsePipes(new ValidationPipe(schema));