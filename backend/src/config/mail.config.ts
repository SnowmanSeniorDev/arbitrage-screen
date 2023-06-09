import { registerAs } from '@nestjs/config';

export default registerAs('mail', () => ({
  host: process.env.MAIL_HOST,
  user: process.env.MAIL_USER,
  pass: process.env.MAIL_PASS,
  from: process.env.MAIL_FROM,
  cacheTTL: process.env.MAIL_CACHE_TTL,
}));
