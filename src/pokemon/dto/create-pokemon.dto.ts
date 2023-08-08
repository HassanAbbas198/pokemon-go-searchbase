import { IsBoolean, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreatePokemonDto {
  @ApiProperty({
    type: Number,
    example: 1,
    description: 'The Pokedex number of the Pokemon.',
  })
  @Type(() => Number)
  @IsNotEmpty()
  pokedexNumber: number;

  @ApiProperty({
    type: String,
    example: 'Bulbasaur',
    description: 'The name of the Pokemon.',
  })
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    type: Number,
    example: 1,
    description: 'The generation of the Pokemon.',
  })
  @IsNotEmpty()
  @IsNumber()
  generation: number;

  @ApiProperty({
    type: String,
    example: 'grass',
    description: 'The primary type of the Pokemon.',
  })
  @IsNotEmpty()
  type1: string;

  @ApiProperty({
    type: String,
    example: 'poison',
    description: 'The secondary type of the Pokemon.',
  })
  @IsNotEmpty()
  type2: string;

  @ApiProperty({
    type: Number,
    example: 118,
    description: 'The attack stat of the Pokemon.',
  })
  @IsNotEmpty()
  @IsNumber()
  atk: number;

  @ApiProperty({
    type: Number,
    example: 118,
    description: 'The defense stat of the Pokemon.',
  })
  @IsNotEmpty()
  @IsNumber()
  def: number;

  @ApiProperty({
    type: Number,
    example: 5,
    description: 'The hatchable distance of the Pokemon in kilometers.',
  })
  @IsNotEmpty()
  @IsNumber()
  hatchable: number;

  @ApiProperty({
    type: Number,
    example: 90,
    description: 'The stamina stat of the Pokemon.',
  })
  @IsNotEmpty()
  @IsNumber()
  sta: number;

  @ApiProperty({
    type: Boolean,
    example: false,
    description: 'Indicates whether the Pokemon is legendary.',
  })
  @IsNotEmpty()
  @IsBoolean()
  legendary: boolean;

  @ApiProperty({
    type: Boolean,
    example: true,
    description: 'Indicates whether the Pokemon is acquirable.',
  })
  @IsNotEmpty()
  @IsBoolean()
  acquireable: boolean;

  @ApiProperty({
    type: Boolean,
    example: true,
    description: 'Indicates whether the Pokemon spawns in the wild.',
  })
  @IsNotEmpty()
  @IsBoolean()
  spawns: boolean;

  @ApiProperty({
    type: Boolean,
    example: true,
    description: 'Indicates whether the Pokemon is raidable.',
  })
  @IsNotEmpty()
  @IsBoolean()
  raidable: boolean;

  @ApiProperty({
    type: Boolean,
    example: false,
    description: 'Indicates whether the Pokemon can be shiny.',
  })
  @IsNotEmpty()
  @IsBoolean()
  shiny: boolean;

  // Rest of the fields are optional

  @ApiPropertyOptional({
    type: String,
    example: 'ImageName',
    description: 'The name of the Pokemon image.',
  })
  @IsOptional()
  imgName: string;

  @ApiPropertyOptional({
    type: Number,
    example: 2,
    description: 'The evolution stage of the Pokemon.',
  })
  @IsOptional()
  @IsNumber()
  evolutionStage: number;

  @ApiPropertyOptional({
    type: Boolean,
    example: true,
    description: 'Indicates whether the Pokemon has evolved.',
  })
  @IsOptional()
  @IsBoolean()
  evolved: boolean;

  @ApiPropertyOptional({
    type: Number,
    example: 1,
    description: 'The family ID of the Pokemon.',
  })
  @IsOptional()
  @IsNumber()
  familyID: number;

  @ApiPropertyOptional({
    type: Boolean,
    example: true,
    description: 'Indicates whether the Pokemon is cross-generational.',
  })
  @IsOptional()
  @IsBoolean()
  crossGen: boolean;

  @ApiPropertyOptional({
    type: String,
    example: 'Sunny/clear',
    description: 'The first weather condition associated with the Pokemon.',
  })
  @IsOptional()
  weather1: string;

  @ApiPropertyOptional({
    type: String,
    example: 'Cloudy',
    description: 'The second weather condition associated with the Pokemon.',
  })
  @IsOptional()
  weather2: string;

  @ApiPropertyOptional({
    type: Number,
    example: 345,
    description: 'The total stat value of the Pokemon.',
  })
  @IsOptional()
  @IsNumber()
  statTotal: number;

  @ApiPropertyOptional({
    type: Boolean,
    example: true,
    description: 'Indicates whether the Pokemon is regional.',
  })
  @IsOptional()
  @IsBoolean()
  regional: boolean;

  @ApiPropertyOptional({
    type: Boolean,
    example: false,
    description: 'Indicates whether the Pokemon nests.',
  })
  @IsOptional()
  @IsBoolean()
  nest: boolean;

  @ApiPropertyOptional({
    type: Boolean,
    example: true,
    description: 'Indicates whether the Pokemon is new.',
  })
  @IsOptional()
  @IsBoolean()
  isNew: boolean;

  @ApiPropertyOptional({
    type: Boolean,
    example: true,
    description: 'Indicates whether the Pokemon is not gettable.',
  })
  @IsOptional()
  @IsBoolean()
  notGettable: boolean;

  @ApiPropertyOptional({
    type: Boolean,
    example: true,
    description: 'Indicates whether the Pokemon has a future evolution.',
  })
  @IsOptional()
  @IsBoolean()
  futureEvolve: boolean;

  @ApiPropertyOptional({
    type: Number,
    example: 938,
    description: 'The CP of the Pokemon at level 40.',
  })
  @IsOptional()
  @IsNumber()
  cpAt40: number;

  @ApiPropertyOptional({
    type: Number,
    example: 945,
    description: 'The CP of the Pokemon at level 39.',
  })
  @IsOptional()
  @IsNumber()
  cpAt39: number;
}
