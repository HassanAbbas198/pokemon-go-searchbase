import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pokemon } from '../entities';
import { CreatePokemonDto } from '../dto';

@Injectable()
export class PokemonRepository {
  constructor(
    @InjectRepository(Pokemon)
    private pokemonRepository: Repository<Pokemon>,
  ) {}

  async insert(data: CreatePokemonDto): Promise<Pokemon> {
    const newPokemon = this.pokemonRepository.create(data);

    return this.pokemonRepository.save(newPokemon);
  }
}
