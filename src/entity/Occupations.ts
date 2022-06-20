import { Customers } from "./Customers";
import { Column, ManyToOne } from "typeorm";
import { Entity, PrimaryGeneratedColumn } from "typeorm";
import { Dates } from "./common/Dates";

@Entity()
export class Occupations extends Dates {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  validFrom: string;

  @Column({ nullable: true })
  validTo: string;

  @ManyToOne(() => Customers, (customer) => customer.occupations)
  customer: Customers;
}
