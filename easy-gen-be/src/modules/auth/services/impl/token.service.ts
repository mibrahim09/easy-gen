import { TokenService } from '../token.service';
import { JwtService } from '@nestjs/jwt';
import { Inject } from '@nestjs/common';

export class TokenServiceImpl extends TokenService {
  constructor(@Inject() private readonly jwtService: JwtService) {
    super();
  }

  async sign(payload: NonNullable<unknown>) {
    return await this.jwtService.signAsync(payload, {
      secret: process.env.JWT_SECRET_KEY,
      expiresIn: process.env.JWT_EXPIRY,
    });
  }
}
