import { LoginUserCommand } from '../../../types/commands/login-user.command';
import { CreateUserCommand } from '../../../types/commands/create-user.command';

export abstract class AuthService {
  abstract login(loginCommand: LoginUserCommand);

  abstract register(command: CreateUserCommand);
}
