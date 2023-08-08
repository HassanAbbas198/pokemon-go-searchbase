import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  ParseIntPipe,
  Query,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiOkResponse,
  ApiNotFoundResponse,
} from '@nestjs/swagger';
import { PokemonService } from './pokemon.service';
import { CreatePokemonDto, GetPokemonQueryDto, UpdatePokemonDto } from './dto';
import { Pokemon } from './entities';
import { PaginationResponse } from '../common/types';
import { SwaggerGetPokemon } from '../common/decorators';

@ApiTags('Pokemon')
@Controller('pokemon')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @Post()
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Add a Pokemon' })
  @ApiOkResponse()
  async addPokemon(@Body() pokemonData: CreatePokemonDto): Promise<void> {
    return this.pokemonService.addPokemon(pokemonData);
  }

  @ApiOperation({ summary: 'Get paginated Pokemon list' })
  @SwaggerGetPokemon()
  @Get()
  async getPokemon(
    @Query() query: GetPokemonQueryDto,
  ): Promise<PaginationResponse<Pokemon>> {
    return this.pokemonService.getPokemon(query);
  }

  @ApiOperation({ summary: 'Get Pokemon details' })
  @ApiOkResponse({
    status: 200,
    description: 'Get a Pokemon details by its ID',
    type: Pokemon,
  })
  @ApiNotFoundResponse({
    description: 'Pokemon with Pokedex Number: 213 not found',
    schema: {
      type: 'object',
      properties: {
        statusCode: { type: 'number' },
        timestamp: { type: 'string' },
        message: { type: 'string' },
      },
    },
  })
  @Get(':id')
  async getPokemonById(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<Pokemon> {
    return this.pokemonService.getPokemonById(id);
  }

  @ApiOperation({ summary: 'Update a Pokemon' })
  @ApiOkResponse()
  @Put(':id')
  async updatePokemon(
    @Param('id', ParseIntPipe) id: number,
    @Body() pokemonData: UpdatePokemonDto,
  ): Promise<void> {
    return this.pokemonService.updatePokemon(id, pokemonData);
  }

  @ApiOperation({ summary: 'Delete a Pokemon' })
  @ApiOkResponse()
  @Delete(':id')
  async deletePokemon(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.pokemonService.deletePokemon(id);
  }
}
