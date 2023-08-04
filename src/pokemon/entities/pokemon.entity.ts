import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Pokemon {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  pokedexNumber: number;

  @Column()
  imgName: string;

  @Column()
  generation: number;

  @Column()
  evolutionStage: number;

  @Column()
  evolved: number;

  @Column()
  familyID: number;

  @Column()
  crossGen: number;

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
  legendary: number;

  @Column()
  acquireable: number;

  @Column()
  spawns: number;

  @Column()
  regional: number;

  @Column()
  raidable: number;

  @Column()
  hatchable: number;

  @Column()
  shiny: number;

  @Column()
  nest: number;

  @Column()
  isNew: number;

  @Column()
  notGettable: number;

  @Column()
  futureEvolve: number;

  @Column()
  cpAt40: number;

  @Column()
  cpAt39: number;
}
