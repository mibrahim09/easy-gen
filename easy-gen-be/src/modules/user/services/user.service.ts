import { User } from '../domain/user';
import { CreateUserCommand } from '../../../types/commands/create-user.command';

export abstract class UserService {
  abstract findValidatedUser(email: string, password: string): Promise<User>;

  abstract createUser(command: CreateUserCommand): Promise<User>;
}
