import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { AuthLoginInput, AuthRegisterInput } from './dto/auth.input';
import { User } from 'src/users/entities/user.entity';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { loginResult } from './dto/auth.output';
import { MailService } from '../utils/services/mail.service';
@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private configService: ConfigService,
    private jwtService: JwtService,
    private mailService: MailService,
  ) {}

  async register(registerInput: AuthRegisterInput): Promise<loginResult> {
    const user = await this.usersService.create(registerInput);
    const { authToken } = await this.createToken(user);
    await this.mailService.sendVerificationEmail(user.email, authToken);
    return { user, authToken };
  }

  async login(loginInput: AuthLoginInput): Promise<loginResult> {
    const user = await this.usersService.findOne(loginInput.email);
    if (user) {
      const { authToken } = this.createToken(user);
      return { user, authToken };
    }
  }

  createToken(user: User): { authToken: string } {
    const expiresIn = this.configService.get('jwt.expiresIn');
    const secret = this.configService.get('jwt.secret');
    const data = { email: user.email };
    const token = this.jwtService.sign(data, { expiresIn, secret });

    return {
      authToken: token,
    };
  }
}
