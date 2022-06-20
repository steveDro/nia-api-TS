import { Contacts } from "./Contacts";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Dates } from "./common/Dates";

@Entity()
export class ContactPhones extends Dates {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

  @Column()
  phoneNumber: string;

  @Column()
  network: string;

  @ManyToOne(() => Contacts, (contact) => contact.phoneNumbers)
  contact: Contacts;
}
