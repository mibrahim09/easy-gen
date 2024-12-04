import { Expose, Transform } from '@nestjs/class-transformer';

export class RegisterUserDto {
  @Transform((params) => params.obj.id?.toString())
  @Expose()
  id: string;

  @Expose()
  name: string;

  @Expose()
  email: string;
}
