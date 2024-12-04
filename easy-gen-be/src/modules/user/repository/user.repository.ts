import { UserEntity } from '../domain/user.entity';
import { CreateUserCommand } from '../../../types/commands/create-user.command';

export abstract class UserRepository {
  abstract findUserByEmail(email: string): Promise<UserEntity>;

  abstract create(command: CreateUserCommand): Promise<UserEntity>;
}
