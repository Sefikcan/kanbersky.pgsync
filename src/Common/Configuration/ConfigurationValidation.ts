import * as Joi from "joi";

export const ConfigValidationSchema = Joi.object().keys({
    PORT: Joi.number().default(3000),
    STAGE: Joi.string().required(),
    DB_HOST: Joi.string().required(),
    DB_PORT: Joi.number().default(5432).required(),
    DB_USERNAME: Joi.string().required(),
    DB_PASSWORD: Joi.string().required(),
    DB_DATABASE: Joi.string().required()
});