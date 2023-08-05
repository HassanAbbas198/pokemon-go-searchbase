import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pokemon } from '../entities';
import { CreatePokemonDto, UpdatePokemonDto } from '../dto';

@Injectable()
export class PokemonRepository {
  constructor(
    @InjectRepository(Pokemon)
    private pokemonRepository: Repository<Pokemon>,
  ) {}

  async createPokemon(data: CreatePokemonDto): Promise<Pokemon> {
    const newPokemon = this.pokemonRepository.create(data);

    return this.pokemonRepository.save(newPokemon);
  }

  async updatePokemon(id: number, data: UpdatePokemonDto): Promise<void> {
    const pokemon = await this.getPokemonById(id);

    if (!pokemon) {
      throw new NotFoundException(
        `Pokemon with Pokedex Number:${id} not found`,
      );
    }

    await this.pokemonRepository.update({ pokedexNumber: id }, data);
  }

  async getPokemonById(id: number): Promise<Pokemon> {
    return this.pokemonRepository.findOne({ where: { pokedexNumber: id } });
  }
}
