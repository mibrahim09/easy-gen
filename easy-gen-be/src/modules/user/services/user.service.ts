import { UserEntity } from '../domain/user.entity';
import { CreateUserCommand } from '../../../types/commands/create-user.command';

export abstract class UserService {
  abstract findValidatedUser(
    email: string,
    password: string,
  ): Promise<UserEntity>;

  abstract createUser(command: CreateUserCommand): Promise<UserEntity>;
}
