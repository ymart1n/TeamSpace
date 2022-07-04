import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // make sure the client side can make requests to the api
  // can further configure this if needed in the future
  app.enableCors();

  app.useGlobalPipes(new ValidationPipe());
  await app.listen(parseInt(process.env.PORT) || 3001);
}
bootstrap();
