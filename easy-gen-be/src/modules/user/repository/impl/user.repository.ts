import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../../domain/user';
import { UserRepository } from '../user.repository';
import { CreateUserCommand } from '../../../../types/commands/create-user.command';

export class UserRepositoryImpl implements UserRepository {
  constructor(
    @InjectRepository(User)
    private readonly repository: Repository<User>,
  ) {}

  findUserByEmail(email: string): Promise<User> {
    return this.repository.findOneBy({ email });
  }

  async create(command: CreateUserCommand): Promise<User> {
    const entity = this.repository.create(command);
    return await this.repository.save(entity);
  }
}
