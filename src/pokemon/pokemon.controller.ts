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
} from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { CreatePokemonDto, GetPokemonQueryDto, UpdatePokemonDto } from './dto';
import { Pokemon } from './entities';

@Controller('pokemon')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @Post()
  async addPokemon(@Body() pokemonData: CreatePokemonDto): Promise<void> {
    return this.pokemonService.addPokemon(pokemonData);
  }

  @Get()
  async getPokemon(@Query() query: GetPokemonQueryDto) {
    return this.pokemonService.getPokemon(query);
  }

  @Get(':id')
  async getPokemonById(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<Pokemon> {
    return this.pokemonService.getPokemonById(id);
  }

  @Put(':id')
  async updatePokemon(
    @Param('id', ParseIntPipe) id: number,
    @Body() pokemonData: UpdatePokemonDto,
  ): Promise<void> {
    return this.pokemonService.updatePokemon(id, pokemonData);
  }

  @Delete(':id')
  async deletePokemon(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.pokemonService.deletePokemon(id);
  }
}
