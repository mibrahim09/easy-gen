import { BadRequestException } from '@nestjs/common';

export class InvalidUserOrPasswordError extends BadRequestException {
  constructor() {
    super('Invalid User Or Password');
  }
}
