import { LoginUserCommand } from '../../../types/commands/login-user.command';
import { CreateUserCommand } from '../../../types/commands/create-user.command';
import { RegisterUserDto } from '../../../types/dtos/register-user.dto';

export abstract class AuthService {
  abstract login(
    loginCommand: LoginUserCommand,
  ): Promise<{ accessToken: string }>;

  abstract register(command: CreateUserCommand): Promise<RegisterUserDto>;
}
