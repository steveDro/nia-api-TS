import { Customers } from "./Customers";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity()
export class CustomerTransactions extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nationalId: string;

  @Column()
  customerId: number;

  @Column()
  fullName: string;

  @CreateDateColumn()
  dateVisited: Date;

  //   @ManyToOne(() => Customers, (customer) => customer.customerTrans)
  //   customer: Customers;
}
