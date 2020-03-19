/** Definition of log levels */
export enum LogLevel {
  Debug = 'Debug',
  Info = 'Info',
  Warning = 'Warning',
  Error = 'Error'
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
