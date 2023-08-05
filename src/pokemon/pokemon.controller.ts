import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { CreatePokemonDto, UpdatePokemonDto } from './dto';

@Controller('pokemon')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @Post()
  addPokemon(@Body() pokemonData: CreatePokemonDto) {
    return this.pokemonService.addPokemon(pokemonData);
  }

  @Get()
  findAll() {
    return this.pokemonService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pokemonService.findOne(+id);
  }

  @Put(':id')
  updatePokemon(
    @Param('id') id: number,
    @Body() pokemonData: UpdatePokemonDto,
  ) {
    return this.pokemonService.updatePokemon(id, pokemonData);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pokemonService.remove(+id);
  }
}
