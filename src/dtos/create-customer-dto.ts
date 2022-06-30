import { Binaries } from "./../entity/Binaries";
import { BiometricFeeds } from "./../entity/BiometricFeeds";
import { Occupations } from "./../entity/Occupations";
import { Contacts } from "./../entity/Contacts";
import { Addresses } from "../entity/Addresses";

export class CreateCustomerDto {
  transactionGuid: string;
  shortGuid: string;
  nationalId: string;
  cardId: string;
  cardValidFrom: Date;
  cardValidTo: Date;
  surname: string;
  forenames: string;
  nationality: string;
  birthDate: Date;
  userId: string;
  userBranch: string;
  requestTimestamp: string;
  responseTimestamp: string;
  addresses: Addresses[];
  contact: Contacts;
  occupations: Occupations[];
  biometricFeed: BiometricFeeds;
  binaries: Binaries[];
}
