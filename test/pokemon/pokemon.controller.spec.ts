import { Test, TestingModule } from '@nestjs/testing';
import { PokemonService } from '../../src/pokemon/pokemon.service';
import { PokemonController } from '../../src/pokemon/pokemon.controller';
import { CreatePokemonDto } from 'src/pokemon/dto';

describe('PokemonController', () => {
  let pokemonController: PokemonController;
  let pokemonService: PokemonService;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      controllers: [PokemonController],
      providers: [
        {
          provide: PokemonService,
          useFactory: () => ({
            addPokemon: jest.fn(),
          }),
        },
      ],
    }).compile();

    pokemonController = moduleFixture.get<PokemonController>(PokemonController);
    pokemonService = moduleFixture.get<PokemonService>(PokemonService);
  });

  afterAll(() => {
    jest.clearAllMocks();
  });

  describe('createPokemon', () => {
    it('should create a new Pokemon', async () => {
      jest.spyOn(pokemonService, 'addPokemon').mockResolvedValue(undefined);

      const createPokemonDto = {
        pokedexNumber: 1,
        name: 'Bulbasaur',
      } as CreatePokemonDto;
      const response = await pokemonController.addPokemon(createPokemonDto);

      // Ensure that the method returns undefined (void)
      expect(response).toBeUndefined();
    });
  });
});
