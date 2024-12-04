import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    AuthModule,
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb://0.0.0.0:27017/auth',

      // Optional but recommended configurations
      useNewUrlParser: true,
      useUnifiedTopology: true,

      // Entity directories
      // entities: [__dirname + '/../**/*.entity.{js,ts}'],
      autoLoadEntities: true,

      // Optional: Enable synchronization (be careful in production)
      synchronize: process.env.NODE_ENV !== 'production',

      // Optional: Set logging
      logging: process.env.NODE_ENV !== 'production',
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
