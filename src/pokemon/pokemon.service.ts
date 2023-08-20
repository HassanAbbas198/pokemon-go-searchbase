import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  CreatePokemonDto,
  GetPokemonFiltersDto,
  GetPokemonQueryDto,
  UpdatePokemonDto,
} from './dto';
import { PokemonRepository } from './repositories';
import { Pokemon } from './entities';
import { formatPaginationResponse } from '../common/helpers';
import { PaginationResponse } from '../common/types';
import { getCacheData } from '../common/decorators';
import { RedisService } from '../redis/redis.service';

@Injectable()
export class PokemonService {
  constructor(
    private readonly pokemonRepository: PokemonRepository,
    // Used by cache decorator
    private readonly redisService: RedisService,
    private readonly config: ConfigService,
  ) {}

  async addPokemon(data: CreatePokemonDto): Promise<void> {
    return this.pokemonRepository.createPokemon(data);
  }

  @getCacheData('pokemon-list')
  async getPokemon(
    query: GetPokemonQueryDto,
  ): Promise<PaginationResponse<Pokemon>> {
    const { page, limit, search, generation } = query;
    const skip = (page - 1) * limit;

    const filters: GetPokemonFiltersDto = {
      skip,
      limit,
      search,
      generation,
    };

    const result = await this.pokemonRepository.getPokemon(filters);

    return formatPaginationResponse(result.pokemon, result.total, page, limit);
  }

  async getPokemonById(id: number): Promise<Pokemon> {
    return this.pokemonRepository.getPokemonById(id);
  }

  async updatePokemon(id: number, data: UpdatePokemonDto): Promise<void> {
    return this.pokemonRepository.updatePokemon(id, data);
  }

  async deletePokemon(id: number): Promise<void> {
    return this.pokemonRepository.deletePokemon(id);
  }
}
