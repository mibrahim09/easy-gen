import {
  CreateDateColumn,
  DeleteDateColumn,
  ObjectIdColumn,
  UpdateDateColumn,
} from 'typeorm';

export class BaseEntity {
  @ObjectIdColumn()
  id: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
