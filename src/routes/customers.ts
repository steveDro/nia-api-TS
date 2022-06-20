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
  const customer = await customerService.createCustomer(
    req.body as CreateCustomerDto
  );
  res.send(customer);
});

export default router;
