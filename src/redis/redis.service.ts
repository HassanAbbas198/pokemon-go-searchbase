import { Injectable, Logger } from '@nestjs/common';
import { InjectRedis, Redis } from '@nestjs-modules/ioredis';

@Injectable()
export class RedisService {
  constructor(
    @InjectRedis() private readonly redis: Redis,
    private readonly logger: Logger,
  ) {
    this.logger = new Logger(RedisService.name);
  }

  /**
   * Store data in Redis with an expiration time.
   * @param {string} key - The key to store the data under.
   * @param {any} data - The data to store in Redis.
   * @param {number} expiresIn - Expiration time in seconds.
   * @returns {Promise<void>}
   */
  async storeData(key: string, data: any, expiresIn: number): Promise<void> {
    await this.redis.set(key, JSON.stringify(data), 'EX', expiresIn);
  }

  /**
   * Get data from Redis based on a given key.
   * @param {string} key - The key to retrieve data from.
   * @returns {Promise<string | null>} - The retrieved data, or null if the key is not found.
   */
  async getDataByKey(key: string): Promise<string | null> {
    return this.redis.get(key);
  }

  /**
   * Delete a key from Redis if it exists.
   * @param {string} key - The key to delete from Redis.
   * @returns {Promise<void>}
   */
  async deleteKey(key: string): Promise<void> {
    await this.redis.del(key);
  }

  /**
   * Clears cached data by deleting keys that match the specified prefix.
   * @param {string} keyPrefix - The prefix of keys to delete.
   * @returns {Promise<void>}
   */
  async clearCachedData(keyPrefix: string): Promise<void> {
    // Create a readable stream using Redis SCAN
    const stream = this.redis.scanStream({
      match: `${keyPrefix}*`, // Specify the pattern to match the keys
    });

    stream.on('data', async (resultKeys: string[]) => {
      // `resultKeys` is an array of strings representing key names.
      for (const key of resultKeys) {
        await this.deleteKey(key);
      }
    });

    stream.on('end', () => {
      this.logger.log(
        `All keys matching the ${keyPrefix} pattern have been deleted.`,
      );
    });
  }
}
