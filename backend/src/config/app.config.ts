import { registerAs } from '@nestjs/config';

export default registerAs('app', () => ({
  port: process.env.PORT || 8080,
  env: process.env.ENV || 'development',
}));
