import { INestApplication } from "@nestjs/common"
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger"

export function InitSwagger(app: INestApplication): void {
    const options = new DocumentBuilder()
    .setTitle('Pgsync Sample')
    .setDescription('This project aim is learn pgsync implementations')
    .setVersion('1.0')
    .build()
  const document = SwaggerModule.createDocument(app, options)
  SwaggerModule.setup('swagger', app, document)
}