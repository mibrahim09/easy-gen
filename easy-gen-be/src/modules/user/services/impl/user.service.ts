import { UserEntity } from '../../domain/user.entity';
import { UserService } from '../user.service';
import { InvalidUserOrPasswordError } from '../../errors/invalid-user-or-password.errors';
import { Utils } from '../../../../utils/utils';
import { UserRepository } from '../../repository/user.repository';
import { CreateUserCommand } from '../../../../types/commands/create-user.command';
import { Injectable } from '@nestjs/common';
import { DuplicateEmailError } from '../../errors/duplicate-email.errors';

@Injectable()
export class UserServiceImpl extends UserService {
  constructor(private readonly repository: UserRepository) {
    super();
  }

  async findValidatedUser(
    email: string,
    password: string,
  ): Promise<UserEntity> {
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

  async createUser(command: CreateUserCommand): Promise<UserEntity> {
    const dbUser = await this.repository.findUserByEmail(command.email);
    if (dbUser) {
      throw new DuplicateEmailError();
    }
    command.password = await Utils.hashString(command.password);
    return await this.repository.create(command);
  }
}
