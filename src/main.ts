import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // solo deja la data que esperas del Dto
      //forbidNonWhitelisted: true,
    }),
  )
  await app.listen(3000);
}
bootstrap();
