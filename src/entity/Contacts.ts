import { ContactPhones } from "./ContactPhones";
import { Customers } from "./Customers";
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Dates } from "./common/Dates";

@Entity()
export class Contacts extends Dates {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @OneToOne(() => Customers, (customer) => customer.contacts)
  @JoinColumn()
  customer: Customers;

  @OneToMany(() => ContactPhones, (contactPhones) => contactPhones.contact)
  @JoinTable()
  phoneNumbers: ContactPhones[];
}
