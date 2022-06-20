import { Face } from "./Face";
import { Customers } from "./Customers";
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Dates } from "./common/Dates";

@Entity()
export class BiometricFeeds extends Dates {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  dataType: string;

  @Column({ default: "Face" })
  type: string;

  @Column({
    type: "bytea",
  })
  data: Uint16Array;

  face: Face;

  @OneToOne(() => Customers, (customer) => customer.biometricFeed)
  @JoinColumn()
  customer: Customers;
}
