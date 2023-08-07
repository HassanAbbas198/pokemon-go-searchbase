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
  @Column({ nullable: true })
  imgName: string;

  @ApiProperty()
  @Column()
  generation: number;

  @ApiProperty()
  @Column({ nullable: true })
  evolutionStage: number;

  @ApiProperty()
  @Column({ nullable: true })
  evolved: boolean;

  @ApiProperty()
  @Column({ nullable: true })
  familyID: number;

  @ApiProperty()
  @Column({ nullable: true })
  crossGen: boolean;

  @ApiProperty()
  @Column()
  type1: string;

  @ApiProperty()
  @Column()
  type2: string;

  @ApiProperty()
  @Column({ nullable: true })
  weather1: string;

  @ApiProperty()
  @Column({ nullable: true })
  weather2: string;

  @ApiProperty()
  @Column({ nullable: true })
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
  @Column({ nullable: true })
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
  @Column({ nullable: true })
  nest: boolean;

  @ApiProperty()
  @Column({ nullable: true })
  isNew: boolean;

  @ApiProperty()
  @Column({ nullable: true })
  notGettable: boolean;

  @ApiProperty()
  @Column({ nullable: true })
  futureEvolve: boolean;

  @ApiProperty()
  @Column({ nullable: true })
  cpAt40: number;

  @ApiProperty()
  @Column({ nullable: true })
  cpAt39: number;
}
