import { Injectable } from '@nestjs/common';
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

@Injectable()
export class PokemonService {
  constructor(private readonly pokemonRepository: PokemonRepository) {}

  async addPokemon(data: CreatePokemonDto): Promise<void> {
    return this.pokemonRepository.createPokemon(data);
  }

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
