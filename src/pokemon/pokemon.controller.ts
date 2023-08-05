import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { CreatePokemonDto, UpdatePokemonDto } from './dto';
import { Pokemon } from './entities';

@Controller('pokemon')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @Post()
  addPokemon(@Body() pokemonData: CreatePokemonDto): Promise<void> {
    return this.pokemonService.addPokemon(pokemonData);
  }

  @Get()
  findAll() {
    return this.pokemonService.findAll();
  }

  @Get(':id')
  getPokemonById(@Param('id', ParseIntPipe) id: number): Promise<Pokemon> {
    return this.pokemonService.getPokemonById(id);
  }

  @Put(':id')
  updatePokemon(
    @Param('id', ParseIntPipe) id: number,
    @Body() pokemonData: UpdatePokemonDto,
  ): Promise<void> {
    return this.pokemonService.updatePokemon(id, pokemonData);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pokemonService.remove(+id);
  }
}
