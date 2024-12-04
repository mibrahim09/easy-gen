import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { LoginUserCommand } from '../../../types/commands/login-user.command';
import { CreateUserCommand } from '../../../types/commands/create-user.command';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  public login(@Body() loginCommand: LoginUserCommand) {
    return this.authService.login(loginCommand);
  }

  @Post('register')
  public register(@Body() command: CreateUserCommand) {
    return this.authService.register(command);
  }
}
