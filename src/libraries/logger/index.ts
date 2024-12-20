import pino, { type Logger as PinoLoggerImpl } from "pino";
import type { ILogger } from "./defintion";

class LoggerWrapper implements ILogger {
  readonly #logger: PinoLoggerImpl;
  constructor() {
    this.#logger = pino({});
  }
  info(message: string): void {
    this.#logger.info(message);
  }
  warn(message: string): void {}
  error(message: string): void {}
  critical(message: string): void {}
  debug(message: string): void {}
}

export const Logger = new LoggerWrapper();
