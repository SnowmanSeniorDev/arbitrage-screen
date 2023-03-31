import {
  Controller,
  Get,
  HttpStatus,
  Query,
  Res,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Response } from 'express';
import { VerifyEmailDto } from './dto/verifyEmail.input';
import { AuthService } from './auth.service';
import {
  INVALID_VERIFY_EMAIL_LINK,
  EMAIL_VERIFIED_SUCCESS,
} from '../utils/message';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Get('/verify-email')
  @UsePipes(new ValidationPipe())
  async verifyEmail(@Query() reqParam: VerifyEmailDto, @Res() res: Response) {
    const { email, id } = reqParam;
    const isVerified = await this.authService.verifyEmail(email, id);
    if (!isVerified) {
      return res.status(HttpStatus.BAD_REQUEST).json(INVALID_VERIFY_EMAIL_LINK);
    }
    return res.status(HttpStatus.OK).json(EMAIL_VERIFIED_SUCCESS);
  }
}
