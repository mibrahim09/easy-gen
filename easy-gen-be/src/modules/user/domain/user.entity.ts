import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../../models/base-entity';

@Entity({ name: 'user' })
export class UserEntity extends BaseEntity {
  @Column({ unique: true })
  email: string;

  @Column()
  name: string;

  @Column()
  password: string;
}
