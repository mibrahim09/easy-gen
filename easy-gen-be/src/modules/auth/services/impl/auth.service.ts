import { LoginUserCommand } from 'src/types/commands/login-user.command';
import { AuthService } from '../auth.service';
import { UserService } from '../../../user/services/user.service';
import { CreateUserCommand } from '../../../../types/commands/create-user.command';

export class AuthServiceImpl extends AuthService {
  constructor(private readonly userService: UserService) {
    super();
  }

  login(loginCommand: LoginUserCommand) {
    throw new Error('Method not implemented.');
  }

  register(command: CreateUserCommand) {
    return this.userService.createUser(command);
  }
}
