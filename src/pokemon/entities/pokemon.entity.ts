import { Entity, Column, PrimaryColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Pokemon {
  @ApiProperty()
  @PrimaryColumn({ unique: true })
  pokedexNumber: number;

  @ApiProperty()
  @Column({ unique: true })
  name: string;

  @ApiProperty()
  @Column()
  imgName: string;

  @ApiProperty()
  @Column()
  generation: number;

  @ApiProperty()
  @Column()
  evolutionStage: number;

  @ApiProperty()
  @Column()
  evolved: boolean;

  @ApiProperty()
  @Column()
  familyID: number;

  @ApiProperty()
  @Column()
  crossGen: boolean;

  @ApiProperty()
  @Column()
  type1: string;

  @ApiProperty()
  @Column()
  type2: string;

  @ApiProperty()
  @Column()
  weather1: string;

  @ApiProperty()
  @Column()
  weather2: string;

  @ApiProperty()
  @Column()
  statTotal: number;

  @ApiProperty()
  @Column()
  atk: number;

  @ApiProperty()
  @Column()
  def: number;

  @ApiProperty()
  @Column()
  sta: number;

  @ApiProperty()
  @Column()
  legendary: boolean;

  @ApiProperty()
  @Column()
  acquireable: boolean;

  @ApiProperty()
  @Column()
  spawns: boolean;

  @ApiProperty()
  @Column()
  regional: boolean;

  @ApiProperty()
  @Column()
  raidable: boolean;

  @ApiProperty()
  @Column()
  hatchable: number;

  @ApiProperty()
  @Column()
  shiny: boolean;

  @ApiProperty()
  @Column()
  nest: boolean;

  @ApiProperty()
  @Column()
  isNew: boolean;

  @ApiProperty()
  @Column()
  notGettable: boolean;

  @ApiProperty()
  @Column()
  futureEvolve: boolean;

  @ApiProperty()
  @Column()
  cpAt40: number;

  @ApiProperty()
  @Column()
  cpAt39: number;
}
