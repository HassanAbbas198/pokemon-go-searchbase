import { Injectable } from '@nestjs/common';
import { CreatePokemonDto, UpdatePokemonDto } from './dto';
import { PokemonRepository } from './repositories';

@Injectable()
export class PokemonService {
  constructor(private readonly pokemonRepository: PokemonRepository) {}

  addPokemon(data: CreatePokemonDto) {
    return this.pokemonRepository.createPokemon(data);
  }

  findAll() {
    return `This action returns all pokemons`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pokemon`;
  }

  updatePokemon(id: number, data: UpdatePokemonDto) {
    return this.pokemonRepository.updatePokemon(id, data);
  }

  remove(id: number) {
    return `This action removes a #${id} pokemon`;
  }
}
