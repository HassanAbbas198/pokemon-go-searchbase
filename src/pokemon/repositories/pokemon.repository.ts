import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pokemon } from '../entities';
import {
  CreatePokemonDto,
  GetPokemonFiltersDto,
  UpdatePokemonDto,
} from '../dto';

@Injectable()
export class PokemonRepository {
  constructor(
    @InjectRepository(Pokemon)
    private pokemonRepository: Repository<Pokemon>,
  ) {}

  /**
   * Insert a new Pokemon
   *
   * @param {CreatePokemonDto} data - Data for creating the Pokemon.
   * @throws {BadRequestException} Thrown if a Pokemon with the same Pokedex number or name already exists.
   */
  async createPokemon(data: CreatePokemonDto): Promise<void> {
    const { pokedexNumber, name } = data;
    const isDuplicate = await this.checkDuplicate(pokedexNumber, name);

    if (isDuplicate) {
      throw new BadRequestException(
        'A pokemon with the same Pokedex number or name already exists',
      );
    }

    const newPokemon = this.pokemonRepository.create(data);

    await this.pokemonRepository.insert(newPokemon);
  }

  /**
   * Get a list of Pokemon based on query parameters.
   *
   * @param {GetPokemonFiltersDto} filters - Query filters.
   * @param {number} filters.limit - Maximum number of Pokemon to return.
   * @param {number} filters.skip - Number of Pokemon to skip.
   * @param {string} filters.search - Search string for Pokemon name.
   * @param {number} filters.generation - Generation number for filtering Pokemon.
   * @returns {Promise<{ pokemon: Pokemon[]; total: number }>} An object containing an array of Pokemon and the total count.
   */
  async getPokemon(
    filters: GetPokemonFiltersDto,
  ): Promise<{ pokemon: Pokemon[]; total: number }> {
    const { limit, skip, search, generation } = filters;

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

  /**
   * Get a Pokemon by its Pokedex number.
   *
   * @param {number} id - Pokedex number of the Pokemon.
   * @returns {Promise<Pokemon>} The Pokemon object.
   * @throws {NotFoundException} Thrown if the Pokemon is not found.
   */
  async getPokemonById(id: number): Promise<Pokemon> {
    const pokemon = await this.pokemonRepository.findOne({
      where: { pokedexNumber: id },
    });

    if (!pokemon) {
      throw new NotFoundException(
        `Pokemon with Pokedex Number: ${id} not found`,
      );
    }

    return pokemon;
  }

  /**
   * Update a Pokemon by its Pokedex number.
   *
   * @param {number} id - Pokedex number of the Pokemon to update.
   * @param {UpdatePokemonDto} data - Data to update the Pokemon.
   * @throws {NotFoundException} Thrown if the Pokemon is not found.
   */
  async updatePokemon(id: number, data: UpdatePokemonDto): Promise<void> {
    await this.getPokemonById(id);

    await this.pokemonRepository.update({ pokedexNumber: id }, data);
  }

  /**
   * Delete a Pokemon by its Pokedex number.
   *
   * @param {number} id - Pokedex number of the Pokemon to delete.
   * @throws {NotFoundException} Thrown if the Pokemon is not found.
   */
  async deletePokemon(id: number): Promise<void> {
    const pokemon = await this.getPokemonById(id);

    await this.pokemonRepository.remove(pokemon);
  }

  /**
   * Check if a Pokemon with the given Pokedex number or name already exists.
   *
   * @param {number} id - Pokedex number of the Pokemon.
   * @param {string} name - Name of the Pokemon.
   * @returns {Promise<boolean>} `true` if a duplicate Pokemon exists, otherwise `false`.
   */
  async checkDuplicate(id: number, name: string): Promise<boolean> {
    const existingPokemon = await this.pokemonRepository.findOne({
      where: [{ pokedexNumber: id }, { name }],
    });
    return !!existingPokemon;
  }
}
