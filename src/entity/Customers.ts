import { Binaries } from "./Binaries";
import { BiometricFeeds } from "./BiometricFeeds";
import { Occupations } from "./Occupations";
import { Contacts } from "./Contacts";
import { Addresses } from "./Addresses";
import {
  Column,
  Entity,
  JoinTable,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Dates } from "./common/Dates";

@Entity()
export class Customers extends Dates {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "character varying" })
  transactionGuid: string;

  @Column()
  shortGuid: string;

  @Column()
  nationalId: string;

  @Column()
  cardId: string;

  @Column()
  cardValidFrom: Date;

  @Column()
  cardValidTo: Date;

  @Column()
  surname: string;

  @Column()
  forenames: string;

  @Column()
  nationality: string;

  @Column()
  birthDate: Date;

  @Column()
  userId: string;

  @Column()
  userBranch: string;

  @Column()
  requestTimestamp: string;

  @Column()
  responseTimestamp: string;

  @Column({ nullable: true })
  birthCountry: string;

  @Column({ nullable: true })
  birthDistrict: string;

  @Column({ nullable: true })
  birthRegion: string;

  @Column({ nullable: true })
  birthTown: string;

  @Column({ nullable: true })
  prevName: string;

  @Column()
  gender: string;

  @OneToMany(() => Addresses, (address) => address.customer, {
    cascade: true,
  })
  @JoinTable()
  addresses: Addresses[];

  @OneToOne(() => Contacts, (contacts) => contacts.customer, {
    cascade: true,
  })
  contacts: Contacts;

  @OneToMany(() => Occupations, (occupations) => occupations.customer, {
    cascade: true,
  })
  @JoinTable()
  occupations: Occupations[];

  @OneToOne(() => BiometricFeeds, (biometricFeed) => biometricFeed.customer)
  biometricFeed: BiometricFeeds;

  @OneToMany(() => Binaries, (binaries) => binaries.customer, {
    cascade: true,
  })
  @JoinTable()
  binaries: Binaries[];
}
