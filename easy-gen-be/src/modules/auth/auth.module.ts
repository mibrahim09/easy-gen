import { Module } from '@nestjs/common';
import { AuthController } from './controller/auth.controller';
import { UserModule } from '../user/user.module';
import { UserService } from '../user/services/user.service';
import { UserServiceImpl } from '../user/services/impl/user.service';
import { AuthService } from './services/auth.service';
import { AuthServiceImpl } from './services/impl/auth.service';
import { TokenService } from './services/token.service';
import { TokenServiceImpl } from './services/impl/token.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  controllers: [AuthController],
  imports: [UserModule, JwtModule.register({})],
  providers: [
    { provide: UserService, useClass: UserServiceImpl },
    { provide: TokenService, useClass: TokenServiceImpl },
    { provide: AuthService, useClass: AuthServiceImpl },
  ],
})
export class AuthModule {}
