import { Injectable } from '@nestjs/common';
import { InjectRedis, Redis } from '@nestjs-modules/ioredis';

@Injectable()
export class RedisService {
  constructor(@InjectRedis() private readonly redis: Redis) {}

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
}
