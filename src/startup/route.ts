import express from "express";
import customers from "../routes/customers";
import swaggerUi from "swagger-ui-express";

import { asyncErrors } from "../middleware/async-errors";
import * as swaggerDocument from "../swagger.json";

export = (app: express.Express) => {
  app.use(express.json());

  const options = {
    customCss: ".swagger-ui .topbar { display: none }",
  };

  app.use("/api/callback/verification", customers);
  app.use("/api", swaggerUi.serve, swaggerUi.setup(swaggerDocument, options));

  app.use(asyncErrors);
};
