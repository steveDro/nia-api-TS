import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Customers } from "./Customers";

@Entity()
export class Binaries {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

  @Column()
  dataType: string;

  @Column({
    type: "bytea",
  })
  data: Uint16Array;

  @ManyToOne(() => Customers, (customer) => customer.binaries)
  customer: Customers;
}
