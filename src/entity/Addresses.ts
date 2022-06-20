import { DigitalAddress } from "./DigitalAddress";
import { Customers } from "./Customers";
import { Column, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Entity } from "typeorm";
import { Dates } from "./common/Dates";

@Entity()
export class Addresses extends Dates {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  type: string;

  @Column({ nullable: true })
  community: string;

  @Column({ nullable: true })
  postalCode: string;

  @Column({ nullable: true })
  region: string;

  @Column({ nullable: true })
  addressDigital: string;

  @ManyToOne(() => Customers, (customer) => customer.addresses)
  customer: Customers;

  @OneToOne(() => DigitalAddress, (digitalAddress) => digitalAddress.address)
  digitalAddress: DigitalAddress;
}
