import { Addresses } from "./Addresses";
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Dates } from "./common/Dates";

@Entity()
export class DigitalAddress extends Dates {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  gpsName: string;

  @Column({ nullable: true })
  region: string;

  @Column({ nullable: true })
  district: string;

  @Column({ nullable: true })
  area: string;

  @Column({ nullable: true })
  street: string;

  @Column({ nullable: true })
  longitude: string;

  @Column({ nullable: true })
  latitude: string;

  @OneToOne(() => Addresses)
  @JoinColumn()
  address: Addresses;
}
