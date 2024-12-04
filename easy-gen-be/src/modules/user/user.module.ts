import { Module } from '@nestjs/common';
import { UserService } from './services/user.service';
import { UserServiceImpl } from './services/impl/user.service';
import { UserRepositoryImpl } from './repository/impl/user.repository';
import { UserRepository } from './repository/user.repository';
import { UserEntity } from './domain/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [],
  imports: [TypeOrmModule.forFeature([UserEntity])],

  providers: [
    { provide: UserRepository, useClass: UserRepositoryImpl },
    { provide: UserService, useClass: UserServiceImpl },
  ],
  exports: [
    { provide: UserService, useClass: UserServiceImpl },
    { provide: UserRepository, useClass: UserRepositoryImpl },
  ],
})
export class UserModule {}
