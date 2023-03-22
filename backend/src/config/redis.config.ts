import { registerAs } from '@nestjs/config';

export default registerAs('redis', () => ({
  host: process.env.REDIS_HOST || 'localhost',
  port: process.env.REDIS_PORT || 6379,
  defaultTTL: process.env.REDIS_DEFAULT_TTL || 5000,
}));
