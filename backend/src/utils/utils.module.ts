import { Module, CacheModule } from '@nestjs/common';
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { ConfigService } from '@nestjs/config';
import { join } from 'path';
import { MailService, CacheService } from './services';
import { redisStore } from 'cache-manager-redis-store';

@Module({
  imports: [
    MailerModule.forRootAsync({
      useFactory: async (config: ConfigService) => ({
        transport: {
          host: config.get('mail.host'),
          secure: true,
          auth: {
            user: config.get('mail.user'),
            pass: config.get('mail.pass'),
          },
        },
        defaults: {
          from: `No Reply <${config.get('mail.from')}>`,
        },
        template: {
          dir: join(__dirname, 'templates'),
          adapter: new HandlebarsAdapter(),
          options: {
            strict: true,
          },
        },
      }),
      inject: [ConfigService],
    }),
    CacheModule.register({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        isGlobal: true,
        store: redisStore,
        host: configService.get('redis.host'),
        port: configService.get('redis.port'),
        ttl: configService.get('redis.defaultTTL'),
      }),
    }),
  ],
  providers: [MailService, CacheService],
  exports: [MailService, CacheService],
})
export class UtilsModule {}
