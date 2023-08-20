import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import config from './common/config';
import { DatabaseModule } from './database/database.module';
import { PokemonModule } from './pokemon/pokemon.module';
import { RedisCustomModule } from './redis/redis.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
    }),
    DatabaseModule,
    RedisCustomModule,
    PokemonModule,
  ],
})
export class AppModule {}
