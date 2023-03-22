import { CacheModule, Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { MailService } from '../utils/services/mail.service';

@Module({
  imports: [UsersModule, JwtModule],
  providers: [AuthResolver, AuthService, MailService],
})
export class AuthModule {}
