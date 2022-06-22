import { createLogger, format, transports } from "winston";

export const logger = createLogger({
  level: "info",
  format: format.combine(format.json(), format.timestamp()),
  transports: [
    new transports.File({ filename: "error-info.log", level: "error" }),
    new transports.File({ filename: "error-info.log", level: "info" }),
  ],
  exceptionHandlers: [
    new transports.File({ filename: "exceptions-rejections.log" }),
  ],
  rejectionHandlers: [
    new transports.File({ filename: "exceptions-rejections.log" }),
  ],
});
