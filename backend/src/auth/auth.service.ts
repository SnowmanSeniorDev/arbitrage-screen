import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { AuthLoginInput, AuthRegisterInput } from './dto/auth.input';

@Injectable()
export class AuthService {
  constructor(private UsersService: UsersService) {}

  async register(registerInput: AuthRegisterInput) {
    const user = await this.UsersService.create(registerInput);
    return user
  }

  login(loginInput: AuthLoginInput) {
    console.log('login service');
  }
}
