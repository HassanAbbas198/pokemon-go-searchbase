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

  async createPokemon(data: CreatePokemonDto): Promise<void> {
    const newPokemon = this.pokemonRepository.create(data);

    await this.pokemonRepository.insert(newPokemon);
  }

  async getPokemon({ limit, skip, search, generation }) {
    const queryBuilder = this.pokemonRepository.createQueryBuilder('pokemon');

    if (search) {
      queryBuilder.where('pokemon.name LIKE :search', {
        search: `%${search}%`,
      });
    }

    if (generation) {
      queryBuilder.andWhere('pokemon.generation = :generation', { generation });
    }

    const [pokemon, total] = await queryBuilder
      .take(limit)
      .skip(skip)
      .getManyAndCount();

    return { pokemon, total };
  }

  async getPokemonById(id: number): Promise<Pokemon> {
    const pokemon = await this.pokemonRepository.findOne({
      where: { pokedexNumber: id },
    });

    if (!pokemon) {
      throw new NotFoundException(
        `Pokemon with Pokedex Number:${id} not found`,
      );
    }

    return pokemon;
  }

  async updatePokemon(id: number, data: UpdatePokemonDto): Promise<void> {
    await this.getPokemonById(id);

    await this.pokemonRepository.update({ pokedexNumber: id }, data);
  }

  async deletePokemon(id: number): Promise<void> {
    const pokemon = await this.getPokemonById(id);

    await this.pokemonRepository.remove(pokemon);
  }
}
