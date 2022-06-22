import { CreateCustomerDto } from "../dtos/create-customer-dto";
import { CustomerService } from "../services/customer.service";
import * as express from "express";
const router = express.Router();

const customerService = new CustomerService();

router.get("/", async (req, res) => {
  const customers = await customerService.getCustomer();
  res.send(customers);
});

router.post("/", async (req, res) => {
  let creatCustomerDto = new CreateCustomerDto();

  const { transactionGuid, shortGuid, person } = req.body.data;

  creatCustomerDto = person;
  creatCustomerDto.transactionGuid = transactionGuid;
  creatCustomerDto.shortGuid = shortGuid;

  const customer = await customerService.createCustomer(creatCustomerDto);
  res.send(customer);
});

export default router;
