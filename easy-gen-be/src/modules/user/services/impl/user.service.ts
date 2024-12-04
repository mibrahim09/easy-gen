import { User } from '../../domain/user';
import { UserService } from '../user.service';
import { InvalidUserOrPasswordError } from '../../errors/invalid-user-or-password.errors';
import { Utils } from '../../../../utils/utils';
import { UserRepository } from '../../repository/user.repository';
import { CreateUserCommand } from '../../../../types/commands/create-user.command';

export class UserServiceImpl extends UserService {
  constructor(private readonly repository: UserRepository) {
    super();
  }

  async findValidatedUser(email: string, password: string): Promise<User> {
    const dbUser = await this.repository.findUserByEmail(email);
    if (!dbUser) {
      throw new InvalidUserOrPasswordError();
    }
    const isPasswordMatch = await Utils.isHashedStringMatch(
      password,
      dbUser.password,
    );
    if (!isPasswordMatch) {
      throw new InvalidUserOrPasswordError();
    }
    return dbUser;
  }

  async createUser(command: CreateUserCommand): Promise<User> {
    command.password = await Utils.hashString(command.password);
    return await this.repository.create(command);
  }
}
