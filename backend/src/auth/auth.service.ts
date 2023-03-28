import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { ForbiddenError } from 'apollo-server-express';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { AuthLoginInput, AuthRegisterInput } from './dto/auth.input';
import { User } from '../users/entities/user.entity';
import { LoginResult } from './dto/auth.output';
import { MailService, CacheService, HelperService } from '../utils/services';
import { ValidationError, AuthenticationError } from 'apollo-server-express';
import {
  EMAIL_RESEND_ERROR,
  WRONG_LOGIN_EMAIL_CREDENCIAL,
  WRONG_LOGIN_PASSWORD_CREDENCIAL,
  FORBIDDEN_ERROR_EMAIL_NOT_VERIFIED,
} from '../utils/message';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly configService: ConfigService,
    private readonly jwtService: JwtService,
    private readonly mailService: MailService,
    private readonly cacheService: CacheService,
    private readonly helperService: HelperService,
  ) {}

  async register(registerInput: AuthRegisterInput): Promise<boolean> {
    const user = await this.usersService.create(registerInput);
    const uuid = this.helperService.getUuid();
    const isSuccess = await this.cacheService.setVerificationEmailToken(
      uuid,
      user.email,
    );
    if (isSuccess) {
      await this.mailService.sendVerificationEmail(user.email, uuid);
      return true;
    }
    throw new InternalServerErrorException(EMAIL_RESEND_ERROR);
  }

  async login(loginInput: AuthLoginInput): Promise<LoginResult> {
    const matchedUser = await this.usersService.findOne(loginInput.email);
    const { password, isEmailVerified } = matchedUser;

    if (!matchedUser) throw new ValidationError(WRONG_LOGIN_EMAIL_CREDENCIAL);
    const isValidPwd = await this.helperService.pwdCompaire(
      loginInput.password,
      password,
    );
    if (!isValidPwd)
      throw new AuthenticationError(WRONG_LOGIN_PASSWORD_CREDENCIAL);
    if (!isEmailVerified) {
      throw new ForbiddenError(FORBIDDEN_ERROR_EMAIL_NOT_VERIFIED);
    }
    const { authToken } = this.createToken(matchedUser);
    return { user: matchedUser, authToken };
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

  async verifyEmail(email: string, id: string): Promise<boolean> {
    const isVerified = await this.cacheService.verifyEmailToken(email, id);
    if (isVerified) await this.usersService.updateUserEmailVerify(email);
    return isVerified;
  }
}
