import { BadRequestException } from '@nestjs/common';

export class DuplicateEmailError extends BadRequestException {
  constructor() {
    super('Email already exists');
  }
}
