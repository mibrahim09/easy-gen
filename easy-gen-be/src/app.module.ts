import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [AuthModule, ConfigModule.forRoot(), TypeOrmModule.forRoot()],
  controllers: [],
  providers: [],
})
export class AppModule {}
