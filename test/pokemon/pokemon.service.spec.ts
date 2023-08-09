import { Test, TestingModule } from '@nestjs/testing';
import { BadRequestException } from '@nestjs/common';
import { PokemonService } from '../../src/pokemon/pokemon.service';
import { PokemonRepository } from '../../src/pokemon/repositories';
import { pokemonData } from '../data';

describe('PokemonService', () => {
  let pokemonService: PokemonService;
  let pokemonRepository: PokemonRepository;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      providers: [
        PokemonService,
        {
          provide: PokemonRepository,
          useFactory: () => ({
            createPokemon: jest.fn(),
            checkDuplicate: jest.fn(),
          }),
        },
      ],
    }).compile();

    pokemonService = moduleFixture.get<PokemonService>(PokemonService);
    pokemonRepository = moduleFixture.get<PokemonRepository>(PokemonRepository);
  });

  afterAll(() => {
    jest.clearAllMocks();
  });

  describe('createPokemon', () => {
    it('should create a new Pokemon', async () => {
      await pokemonService.addPokemon(pokemonData);

      expect(pokemonRepository.createPokemon).toHaveBeenCalled();
      expect(pokemonRepository.createPokemon).toHaveBeenCalledWith(pokemonData);
    });

    it('should throw BadRequestException when adding a Pokemon that exists', async () => {
      // Mock the necessary methods
      jest.spyOn(pokemonRepository, 'checkDuplicate').mockResolvedValue(true);
      jest.spyOn(pokemonRepository, 'createPokemon').mockImplementation(() => {
        throw new BadRequestException(
          'A pokemon with the same Pokedex number or name already exists',
        );
      });

      await expect(pokemonService.addPokemon(pokemonData)).rejects.toThrow(
        new BadRequestException(
          'A pokemon with the same Pokedex number or name already exists',
        ),
      );

      expect(pokemonRepository.createPokemon).toHaveBeenCalledWith(pokemonData);
    });
  });
});
