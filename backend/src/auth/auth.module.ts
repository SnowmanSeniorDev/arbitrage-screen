import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { MailService, CacheService, HelperService } from '../utils/services';

@Module({
  imports: [UsersModule, JwtModule],
  providers: [
    AuthResolver,
    AuthService,
    MailService,
    CacheService,
    HelperService,
  ],
})
export class AuthModule {}
