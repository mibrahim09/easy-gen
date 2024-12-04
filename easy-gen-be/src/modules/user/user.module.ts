import { Module } from '@nestjs/common';
import { UserService } from './services/user.service';
import { UserServiceImpl } from './services/impl/user.service';
import { UserRepositoryImpl } from './repository/impl/user.repository';
import { UserRepository } from './repository/user.repository';

@Module({
  controllers: [],
  providers: [
    { provide: UserService, useClass: UserServiceImpl },
    { provide: UserRepository, useClass: UserRepositoryImpl },
  ],
  exports: [{ provide: UserService, useClass: UserServiceImpl }],
})
export class UserModule {}
