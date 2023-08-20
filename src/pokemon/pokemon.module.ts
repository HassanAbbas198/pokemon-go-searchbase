import { Logger, Module } from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { PokemonController } from './pokemon.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PokemonRepository } from './repositories';
import { Pokemon } from './entities';
import { RedisService } from '../redis/redis.service';

@Module({
  imports: [TypeOrmModule.forFeature([Pokemon])],
  controllers: [PokemonController],
  providers: [PokemonService, PokemonRepository, RedisService, Logger],
})
export class PokemonModule {}
