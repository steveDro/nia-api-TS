import express from "express";
import { logger } from "./startup/logger";
import * as connection from "./startup/db";
import helmet from "helmet";
import route from "./startup/route";
const app = express();

app.use(helmet());

connection.db();
route(app);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  logger.info(`listening on port ${port}`);
});
