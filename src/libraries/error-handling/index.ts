import type { NextFunction, Request, Response } from "express";
import { Logger } from "../logger";
import { AppError } from "./app-error";

export const errorHandler = {
  handler: (err: Error | AppError, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      Logger.info(`Error: ${err.name} - ${err.message}`);
      return res.status(err.httpCodes).json({
        name: err.name,
        message: err.message,
      });
    }
    return res.status(500).json({
      name: "Internal server error",
      message: err.message,
    });
  },
};
