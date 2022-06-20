import { CustomerTransactions } from "./entity/CustomerTransactions";
import { Binaries } from "./entity/Binaries";
import { BiometricFeeds } from "./entity/BiometricFeeds";
import { ContactPhones } from "./entity/ContactPhones";
import { Occupations } from "./entity/Occupations";
import { Contacts } from "./entity/Contacts";
import { DigitalAddress } from "./entity/DigitalAddress";
import { Addresses } from "./entity/Addresses";
import { Customers } from "./entity/Customers";
import "reflect-metadata";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "pass123",
  database: "nia-api-db",
  synchronize: true,
  logging: false,
  entities: [
    Customers,
    Addresses,
    DigitalAddress,
    Contacts,
    Occupations,
    ContactPhones,
    BiometricFeeds,
    Binaries,
    CustomerTransactions,
  ],
  migrations: ["build/src/migrations/**/*.{ts,js}"],
  subscribers: [],
});
