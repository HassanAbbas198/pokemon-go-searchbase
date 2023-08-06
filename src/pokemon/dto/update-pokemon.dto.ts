import { PartialType, OmitType } from '@nestjs/mapped-types';
import { CreatePokemonDto } from './create-pokemon.dto';

export class UpdatePokemonDto extends PartialType(
  OmitType(CreatePokemonDto, ['pokedexNumber'] as const),
) {}
