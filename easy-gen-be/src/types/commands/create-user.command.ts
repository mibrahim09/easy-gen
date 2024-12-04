import { lowerCaseTransformer } from '../../transformers/lower-case.transformer';
import { Transform } from '@nestjs/class-transformer';
import { IsEmail, IsString, Matches, MinLength } from '@nestjs/class-validator';

export class CreateUserCommand {
  @Transform(lowerCaseTransformer)
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  name: string;

  @IsString()
  @MinLength(8)
  @Matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/, {
    message:
      'Password must contain at least one letter, one number, and one special character',
  })
  password: string;
}
