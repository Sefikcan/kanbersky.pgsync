import { ConfigModule } from "@nestjs/config";
import Configuration from "./Configuration";
import { ConfigValidationSchema } from "./ConfigurationValidation";

export default ConfigModule.forRoot({
    isGlobal: true,
    load: [ Configuration ],
    envFilePath: [`.env.stage.${process.env.STAGE}`],
    validationSchema: ConfigValidationSchema,
});