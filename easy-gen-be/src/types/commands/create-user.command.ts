import { lowerCaseTransformer } from '../../transformers/lower-case.transformer';
import { Transform } from '@nestjs/class-transformer';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Matches,
  MinLength,
} from '@nestjs/class-validator';

export class CreateUserCommand {
  @Transform(lowerCaseTransformer)
  @IsEmail()
  @IsNotEmpty({ message: 'Password is required' })
  email: string;

  @IsString()
  @IsNotEmpty({ message: 'Password is required' })
  @MinLength(6)
  name: string;

  @IsString()
  @IsNotEmpty({ message: 'Password is required' })
  @MinLength(8)
  @Matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/, {
    message:
      'Password must contain at least one letter, one number, and one special character',
  })
  password: string;
}
