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
export class CustHistory extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  customerId: number;

  @Column({ type: "character varying" })
  transactionGuid: string;

  @Column()
  shortGuid: string;

  @Column()
  nationalId: string;

  @Column()
  fullName: string;

  @CreateDateColumn()
  dateVisited: Date;

  //   @ManyToOne(() => Customers, (customer) => customer.customerTrans)
  //   customer: Customers;
}
