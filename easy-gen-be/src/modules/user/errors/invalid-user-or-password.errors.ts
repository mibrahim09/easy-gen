import { UnauthorizedException } from '@nestjs/common';

export class InvalidUserOrPasswordError extends UnauthorizedException {
  constructor() {
    super('Invalid User Or Password');
  }
}
