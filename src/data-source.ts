import "reflect-metadata";
import { config } from "config";
import { DataSource } from "typeorm";
import { CustomerTransactions } from "./entity/CustomerTransactions";
import { Binaries } from "./entity/Binaries";
import { BiometricFeeds } from "./entity/BiometricFeeds";
import { ContactPhones } from "./entity/ContactPhones";
import { Occupations } from "./entity/Occupations";
import { Contacts } from "./entity/Contacts";
import { DigitalAddress } from "./entity/DigitalAddress";
import { Addresses } from "./entity/Addresses";
import { Customers } from "./entity/Customers";

export const AppDataSource = new DataSource({
  type: config.get("type"),
  host: config.get("host"),
  port: config.get("port"),
  username: config.get("username"),
  password: config.get("password"),
  database: config.get("db"),
  synchronize: true,
  logging: true,
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
