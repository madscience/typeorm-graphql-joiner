import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Address } from './address';

@Entity()
export class Owner {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public name: string;

  @Column(_type => Address)
  public address: Address;
}
