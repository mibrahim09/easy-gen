import { BaseEntity } from '../../../models/base.entity';
import { Column } from 'typeorm';

export class User extends BaseEntity {
  @Column({ unique: true })
  email: string;

  @Column()
  name: string;

  @Column()
  password: string;
}
