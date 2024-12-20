export type LOG_LEVELS = "debug" | "info" | "warn" | "error" | "critical";

export interface ILogger {
  info(message: string): void;
  debug(message: string): void;
  warn(message: string): void;
  error(message: string): void;
  critical(message: string): void;
}
