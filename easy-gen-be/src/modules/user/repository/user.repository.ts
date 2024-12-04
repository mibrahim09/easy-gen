import { User } from '../domain/user';
import { CreateUserCommand } from '../../../types/commands/create-user.command';

export abstract class UserRepository {
  abstract findUserByEmail(email: string): Promise<User>;

  abstract create(command: CreateUserCommand): Promise<User>;
}
