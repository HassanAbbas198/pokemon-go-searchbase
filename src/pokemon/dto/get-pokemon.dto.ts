import { Type } from 'class-transformer';
import { IsOptional, Min } from 'class-validator';

class BasePokemonDto {
  @Type(() => Number)
  @IsOptional()
  @Min(1)
  limit = 20;

  @Type(() => Number)
  @IsOptional()
  @Min(1)
  generation: number;

  @IsOptional()
  search: string;
}

export class GetPokemonQueryDto extends BasePokemonDto {
  @Type(() => Number)
  @IsOptional()
  @Min(1)
  page = 1;
}

export class GetPokemonFiltersDto extends BasePokemonDto {
  @Min(0)
  skip: number;
}
