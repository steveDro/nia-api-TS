import winston from "winston";

export const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: "error-info.log", level: "error" }),
    new winston.transports.File({ filename: "error-info.log", level: "info" }),
  ],
  exceptionHandlers: [
    new winston.transports.File({ filename: "exceptions-rejections.log" }),
  ],
  rejectionHandlers: [
    new winston.transports.File({ filename: "exceptions-rejections.log" }),
  ],
});
