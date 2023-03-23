import { Injectable, Inject, CACHE_MANAGER } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Cache } from 'cache-manager';

@Injectable()
export class CacheService {
  constructor(
    @Inject(CACHE_MANAGER) private readonly cacheManager: Cache,
    private readonly configService: ConfigService,
  ) {}

  async setVerificationEmailToken(email, token): Promise<boolean> {
    const IsTokenExist = (await this.cacheManager.get(email)) !== undefined;
    if (IsTokenExist) return false;
    await this.cacheManager.set(
      email,
      token,
      this.configService.get('mail.cacheTTL'),
    );
    await this.cacheManager.set(
      token,
      email,
      this.configService.get('mail.cacheTTL'),
    );
    return true;
  }

  async verifyEmailToken(email, token): Promise<boolean> {
    const isVerified = (await this.cacheManager.get(token)) === email;
    if (!isVerified) return isVerified;
    await this.cacheManager.del(email);
    await this.cacheManager.del(token);
    return isVerified;
  }
}
