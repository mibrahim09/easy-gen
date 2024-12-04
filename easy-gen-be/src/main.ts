import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(
    new ClassSerializerInterceptor(app.get(Reflector), {
      transformerPackage: require('@nestjs/class-transformer'),
      excludeExtraneousValues: true,
    }),
  );
  app.useGlobalPipes(
    new ValidationPipe({
      validatorPackage: require('@nestjs/class-validator'),
      transformerPackage: require('@nestjs/class-transformer'),
      whitelist: true,
      // forbidNonWhitelisted: true,
      // forbidUnknownValues: true,
    }),
  );
  await app.listen(3000);
}

bootstrap();
