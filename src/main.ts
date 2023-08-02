import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { AppModule } from './app.module';

const logger = new Logger('Boostrap server');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await app.listen(process.env.PORT);

  logger.log(`pokemon-go server running on port ${process.env.PORT}`);
}
bootstrap();
