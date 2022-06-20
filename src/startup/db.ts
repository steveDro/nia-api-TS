import { logger } from "./logger";
import { AppDataSource } from "../data-source";

export const db = () => {
  return AppDataSource.initialize()
    .then(async () => logger.info("connected..."))
    .catch((error) => logger.error(error));
};
