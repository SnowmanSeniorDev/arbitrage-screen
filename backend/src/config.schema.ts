import * as Joi from 'joi';

export const configSchemaValidation = Joi.object({
  STAGE: Joi.string().required(),
  PORT: Joi.number().default(8080).required(),
  ENV: Joi.string().default('development').required(),
  DB_HOST: Joi.string().required(),
  DB_PORT: Joi.number().default(5432).required(),
  DB_USERNAME: Joi.string().required(),
  DB_PASSWORD: Joi.string().required(),
  DB_DATABASE: Joi.string().required(),
  REDIS_HOST: Joi.string().required(),
  REDIS_PORT: Joi.number().default(6379).required(),
  REDIS_DEFAULT_TTL: Joi.number().default(5000).required(),
  JWT_SECRET: Joi.string().default('my-secret-key').required(),
  JWT_EXPIRES_IN: Joi.number().required(),
  MAIL_HOST: Joi.string().default('smtp.sendgrid.net').required(),
  MAIL_USER: Joi.string().default('apikey').required(),
  MAIL_PASS: Joi.string().required(),
  MAIL_FROM: Joi.string().email().required(),
  MAIL_CACHE_TTL: Joi.number().required(),
});
