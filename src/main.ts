import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { loadConfig } from './common/utils/ini/load-config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: [process.env.FRONTEND_URL],
  });
  app.useGlobalPipes(new ValidationPipe({ transform: true, whitelist: true }));

  await loadConfig();

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
