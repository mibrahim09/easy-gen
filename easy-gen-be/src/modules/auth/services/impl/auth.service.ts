import { LoginUserCommand } from 'src/types/commands/login-user.command';
import { AuthService } from '../auth.service';
import { UserService } from '../../../user/services/user.service';
import { CreateUserCommand } from '../../../../types/commands/create-user.command';
import { TokenService } from '../token.service';
import { USER_POLICIES } from '../../../../constants/permissions/user-roles';
import { plainToClass } from '@nestjs/class-transformer';
import { RegisterUserDto } from '../../../../types/dtos/register-user.dto';
import { Inject } from '@nestjs/common';

export class AuthServiceImpl extends AuthService {
  constructor(
    @Inject()
    private readonly userService: UserService,
    @Inject()
    private readonly tokenService: TokenService,
  ) {
    super();
  }

  async login(command: LoginUserCommand) {
    console.log(`login-start,email=${command.email}`);
    const user = await this.userService.findValidatedUser(
      command.email,
      command.password,
    );
    const accessToken = await this.tokenService.sign({
      id: user.id,
      policies: USER_POLICIES,
    });
    console.log(`login-sucess,email=${command.email}`);

    return {
      accessToken,
    };
  }

  async register(command: CreateUserCommand) {
    console.log(`register-start,email=${command.email},name-${command.name}`);
    const result = await this.userService.createUser(command);
    return plainToClass(RegisterUserDto, result);
  }
}
