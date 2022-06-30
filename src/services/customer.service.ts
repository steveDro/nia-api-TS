import { CustHistory } from "../entity/CustHistory";
import { BiometricFeeds } from "./../entity/BiometricFeeds";
import { ContactPhones } from "./../entity/ContactPhones";
import { DigitalAddress } from "./../entity/DigitalAddress";
import { CreateCustomerDto } from "./../dtos/create-customer-dto";
import { Addresses } from "./../entity/Addresses";
import { Customers } from "../entity/Customers";
import { datasource, repository } from "../utils/common";
import { Brackets } from "typeorm";

export class CustomerService {
  async getCustomers(): Promise<Customers[]> {
    return await datasource(Customers, "customer").getMany();
  }
  async getCustomer(): Promise<Customers[]> {
    return await repository(Customers, "customer")
      .leftJoin("customer.addresses", "address")
      .leftJoin("address.digitalAddress", "digitalAddress")
      .leftJoin("customer.contacts", "contacts")
      .leftJoin("contacts.phoneNumbers", "contactPhone")
      .leftJoin("customer.occupations", "occupations")
      .leftJoin("customer.biometricFeed", "biometricFeeds")
      .leftJoin("customer.binaries", "binaries")
      .select([
        "customer.nationalId",
        "customer.forenames",
        "customer.surname",
        "customer.nationality",
        "address.type",
        "address.community",
        "address.postalCode",
        "address.region",
        "address.addressDigital",
        "digitalAddress.gpsName",
        "digitalAddress.region",
        "digitalAddress.district",
        "digitalAddress.area",
        "digitalAddress.street",
        "digitalAddress.longitude",
        "digitalAddress.latitude",
        "contacts.email",
        "contactPhone.type",
        "contactPhone.phoneNumber",
        "contactPhone.network",
        "occupations.name",
        "occupations.validFrom",
        "occupations.validTo",
        "biometricFeeds.dataType",
        "biometricFeeds.type",
        "binaries.dataType",
        "binaries.type",
      ])
      //   .where("address.addressDigital != null", {})
      // .andWhere("customer.surname =:surname", { surname: "NUNNO" })
      // .andWhere(
      //   new Brackets((qb) => {
      //     qb.where("customer.surname =:surname", { surname: "AKOTO" }).orWhere(
      //       "customer.surname =:surname",
      //       { surname: "NUNNO" }
      //     );
      //   })
      // )
      .getMany();
  }
  async getCustomerById(nationalId: string): Promise<Customers> {
    return await Customers.findOne({ where: { nationalId: nationalId } });
  }

  async createCustomer(
    createCustomerDto: CreateCustomerDto
  ): Promise<Customers | CustHistory> {
    let customer = Customers.create({
      ...createCustomerDto,
      contacts: createCustomerDto.contact,
    });

    let customerExist = await this.getCustomerById(customer.nationalId);

    if (customerExist) {
      return CustHistory.create({
        customerId: customerExist.id,
        nationalId: customerExist.nationalId,
        transactionGuid: customerExist.transactionGuid,
        shortGuid: customerExist.shortGuid,
        userId: customerExist.userId,
        userBranch: customerExist.userBranch,
        requestTimestamp: customerExist.requestTimestamp,
        responseTimestamp: customerExist.responseTimestamp,
        fullName: customerExist.forenames + " " + customerExist.surname,
      }).save();
    }

    // save customer
    customer = await Customers.save(customer);

    // Digital address
    const addresses = Addresses.create(customer.addresses);
    addresses.forEach((address) => {
      DigitalAddress.save({ ...address.digitalAddress, address: address });
    });

    // Contact phones
    customer.contacts.phoneNumbers.forEach((phone) => {
      ContactPhones.save({ ...phone, contact: customer.contacts });
    });

    // Biometric
    const biometricFeed = createCustomerDto.biometricFeed;
    customer.biometricFeed.type = biometricFeed.type;
    customer.biometricFeed.dataType = biometricFeed.face.dataType;
    customer.biometricFeed.data = biometricFeed.face.data;

    BiometricFeeds.save({
      ...customer.biometricFeed,
      customer: customer,
    });

    return customer;
  }
}
