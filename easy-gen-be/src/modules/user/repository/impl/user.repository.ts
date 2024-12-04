import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from '../../domain/user.entity';
import { UserRepository } from '../user.repository';
import { CreateUserCommand } from '../../../../types/commands/create-user.command';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserRepositoryImpl extends UserRepository {
  constructor(
    @InjectRepository(UserEntity)
    private readonly repository: Repository<UserEntity>,
  ) {
    super();
  }

  findUserByEmail(email: string): Promise<UserEntity> {
    return this.repository.findOneBy({ email });
  }

  async create(command: CreateUserCommand): Promise<UserEntity> {
    const entity = this.repository.create(command);
    return await this.repository.save(entity);
  }
}
