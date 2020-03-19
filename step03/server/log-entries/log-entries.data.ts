import {LogEntryList, LogLevel} from './log-entry.model';

/** Some log entries to play with */
export const logEntries: LogEntryList = [
  {systemId: 1, timestamp: new Date(2020, 3, 1, 10, 0, 0), level: LogLevel.debug, message: 'Debug Message'},
  {systemId: 1, timestamp: new Date(2020, 3, 1, 10, 1, 0), level: LogLevel.info, message: 'Info Message'},
  {systemId: 1, timestamp: new Date(2020, 3, 1, 10, 2, 0), level: LogLevel.warning, message: 'Warning Message'},
  {systemId: 1, timestamp: new Date(2020, 3, 1, 10, 3, 0), level: LogLevel.error, message: 'Error Message'},
  
  {systemId: 2, timestamp: new Date(2020, 3, 1, 11, 0, 0), level: LogLevel.debug, message: 'Debug Message'},
  {systemId: 2, timestamp: new Date(2020, 3, 1, 11, 1, 0), level: LogLevel.info, message: 'Info Message'},
  {systemId: 2, timestamp: new Date(2020, 3, 1, 11, 2, 0), level: LogLevel.warning, message: 'Warning Message'},
  {systemId: 2, timestamp: new Date(2020, 3, 1, 11, 3, 0), level: LogLevel.error, message: 'Error Message'}
]
