import { Injectable } from '@nestjs/common';
import { CreatePokemonDto, UpdatePokemonDto } from './dto';
import { PokemonRepository } from './repositories';
import { Pokemon } from './entities';

@Injectable()
export class PokemonService {
  constructor(private readonly pokemonRepository: PokemonRepository) {}

  addPokemon(data: CreatePokemonDto): Promise<void> {
    return this.pokemonRepository.createPokemon(data);
  }

  findAll() {
    return `This action returns all pokemons`;
  }

  getPokemonById(id: number): Promise<Pokemon> {
    return this.pokemonRepository.getPokemonById(id);
  }

  updatePokemon(id: number, data: UpdatePokemonDto): Promise<void> {
    return this.pokemonRepository.updatePokemon(id, data);
  }

  remove(id: number) {
    return `This action removes a #${id} pokemon`;
  }
}
