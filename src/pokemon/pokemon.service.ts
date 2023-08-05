import { Injectable } from '@nestjs/common';
import { CreatePokemonDto, UpdatePokemonDto } from './dto';
import { PokemonRepository } from './repositories';
import { Pokemon } from './entities';

@Injectable()
export class PokemonService {
  constructor(private readonly pokemonRepository: PokemonRepository) {}

  async addPokemon(data: CreatePokemonDto): Promise<void> {
    return this.pokemonRepository.createPokemon(data);
  }

  findAll() {
    return `This action returns all pokemons`;
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
