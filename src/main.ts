import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import helmet from 'helmet';
import { AppModule } from './app.module';
import { InitSwagger } from './Common/Swagger/SwaggerModule';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(helmet());
  app.enableShutdownHooks();
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();

  InitSwagger(app);
  await app.listen(3000);
}
bootstrap();
