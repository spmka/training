/** Definition of log levels */
export enum LogLevel {
  debug,
  info,
  warning,
  error
}

/** Definition of a log entry */
export interface LogEntry {
  systemId: number;
  timestamp: Date;
  level: LogLevel;
  message: string;
}

/** A list of log entries */
export type LogEntryList = Array<LogEntry>;