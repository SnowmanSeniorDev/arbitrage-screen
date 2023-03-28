import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { AuthController } from './auth.controller';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { MailService, CacheService, HelperService } from '../utils/services';

@Module({
  imports: [UsersModule, JwtModule],
  controllers: [AuthController],
  providers: [
    AuthResolver,
    AuthController,
    AuthService,
    MailService,
    CacheService,
    HelperService,
  ],
})
export class AuthModule {}
