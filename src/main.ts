import { NestFactory } from '@nestjs/core';
import { Logger, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './common/helpers';
import { LoggingInterceptor } from './common/interceptors';

const logger = new Logger('Boostrap server');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Apply the HttpExceptionFilter globally
  app.useGlobalFilters(new HttpExceptionFilter());

  // Apply the ValidationPipe globally to all incoming requests and strips any properties that are not defined in the defined DTOs
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );

  const configService = app.get(ConfigService);
  app.useGlobalInterceptors(new LoggingInterceptor(logger, configService));

  const config = new DocumentBuilder()
    .setTitle('Pokemon API')
    .setDescription('API documentation for Pokemon CRUD operations')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);

  await app.listen(process.env.PORT);

  logger.log(`pokemon-go server running on port ${process.env.PORT}`);
}
bootstrap();
