import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreatePokemonDto {
  @IsNotEmpty()
  @IsNumber()
  pokedexNumber: number;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  generation: number;

  @IsNotEmpty()
  @IsString()
  type1: string;

  @IsNotEmpty()
  @IsString()
  type2: string;

  @IsNotEmpty()
  @IsNumber()
  atk: number;

  @IsNotEmpty()
  @IsNumber()
  def: number;

  @IsNotEmpty()
  @IsNumber()
  hatchable: number;

  @IsNotEmpty()
  @IsNumber()
  sta: number;

  @IsNotEmpty()
  @IsBoolean()
  legendary: boolean;

  @IsNotEmpty()
  @IsBoolean()
  acquireable: boolean;

  @IsNotEmpty()
  @IsBoolean()
  spawns: boolean;

  @IsNotEmpty()
  @IsBoolean()
  raidable: boolean;

  @IsNotEmpty()
  @IsBoolean()
  shiny: boolean;

  // Rest of the fields are optional
  @IsOptional()
  @IsString()
  imgName?: string;

  @IsOptional()
  @IsNumber()
  evolutionStage?: number;

  @IsOptional()
  @IsBoolean()
  evolved?: boolean;

  @IsOptional()
  @IsNumber()
  familyID?: number;

  @IsOptional()
  @IsBoolean()
  crossGen?: boolean;

  @IsOptional()
  @IsString()
  weather1?: string;

  @IsOptional()
  @IsString()
  weather2?: string;

  @IsOptional()
  @IsNumber()
  statTotal?: number;

  @IsOptional()
  @IsBoolean()
  regional?: boolean;

  @IsOptional()
  @IsBoolean()
  nest?: boolean;

  @IsOptional()
  @IsBoolean()
  isNew?: boolean;

  @IsOptional()
  @IsBoolean()
  notGettable?: boolean;

  @IsOptional()
  @IsBoolean()
  futureEvolve?: boolean;

  @IsOptional()
  @IsNumber()
  cpAt40?: number;

  @IsOptional()
  @IsNumber()
  cpAt39?: number;
}
