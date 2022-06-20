import { logger } from "./../startup/logger";
import { Request, Response, NextFunction } from "express";
import "express-async-errors";

export const asyncErrors = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  logger.error(err.message, err);
  res.status(500).send(`
    <html><body><h1>Oops! Something went wrong. ${err.message}</h1></body></html>
    `);

  next();
};
