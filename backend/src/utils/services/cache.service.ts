import { Injectable, Inject, CACHE_MANAGER } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Cache from 'cache-manager';

@Injectable()
export class CacheService {
  constructor(
    @Inject(CACHE_MANAGER) private readonly cacheManager: Cache,
    private readonly configService: ConfigService,
  ) {}

  async setVerificationEmailToken(key, value): Promise<void> {
    console.log('mail.cacheTTL: ', this.configService.get('mail.cacheTTL'));
    await this.cacheManager.put(key, value);
    const keys = await this.cacheManager.keys();
    console.log('keys: ', keys);
  }
}
