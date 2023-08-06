import { NestFactory } from '@nestjs/core';
import { Logger, ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './common/helpers';

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

  await app.listen(process.env.PORT);

  logger.log(`pokemon-go server running on port ${process.env.PORT}`);
}
bootstrap();
