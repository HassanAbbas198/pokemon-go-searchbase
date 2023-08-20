import { Logger, BadRequestException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { GetPokemonQueryDto } from 'src/pokemon/dto';

const logger = new Logger('CacheData');
const config = new ConfigService();

export const getCacheData =
  (cacheKeyPrefix: string) =>
  (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    // Store the original method implementation
    const originalMethod = descriptor.value;

    // Replace the original method with a new wrapper function
    descriptor.value = async function fetchCacheData(
      ...args: [any]
    ): Promise<any> {
      try {
        if (config.get('CACHE_ENABLED') === 'true') {
          // Access query parameters from the args parameter
          const query = args[0];
          // generate a cache key based on cacheKeyPrefix and query parameters
          const cacheKey = `${cacheKeyPrefix}:${JSON.stringify(query)}`;

          // fetch data from the cache by key, and return it if found
          const cachedData = await this.redisService.getDataByKey(cacheKey);
          if (cachedData) {
            return JSON.parse(cachedData);
          }

          // if not found, call the original method and store its response in cache for future use
          const response = await originalMethod.apply(this, args);

          // read the cache expiration time in seconds from the env
          const cacheExpiry = +config.get('REDIS_EXPIRES_IN') || 3600;

          await this.redisService.storeData(cacheKey, response, cacheExpiry);
          return response;
        }

        // If caching is disabled, directly call the original method
        return await originalMethod.apply(this, args);
      } catch (err) {
        logger.error({ message: err.stack });
        throw new BadRequestException({
          message: `Error fetching cached data: ${err.message}`,
          statusCode: 400,
        });
      }
    };
  };
