import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class Pokemon {
  @PrimaryColumn({ unique: true })
  pokedexNumber: number;

  @Column({ unique: true })
  name: string;

  @Column()
  imgName: string;

  @Column()
  generation: number;

  @Column()
  evolutionStage: number;

  @Column()
  evolved: boolean;

  @Column()
  familyID: number;

  @Column()
  crossGen: boolean;

  @Column()
  type1: string;

  @Column()
  type2: string;

  @Column()
  weather1: string;

  @Column()
  weather2: string;

  @Column()
  statTotal: number;

  @Column()
  atk: number;

  @Column()
  def: number;

  @Column()
  sta: number;

  @Column()
  legendary: boolean;

  @Column()
  acquireable: boolean;

  @Column()
  spawns: boolean;

  @Column()
  regional: boolean;

  @Column()
  raidable: boolean;

  @Column()
  hatchable: number;

  @Column()
  shiny: boolean;

  @Column()
  nest: boolean;

  @Column()
  isNew: boolean;

  @Column()
  notGettable: boolean;

  @Column()
  futureEvolve: boolean;

  @Column()
  cpAt40: number;

  @Column()
  cpAt39: number;
}
