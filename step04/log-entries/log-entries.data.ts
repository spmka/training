import {LogEntryList, LogLevel, logLevels} from './log-entry.model';
import {logisticSystems} from '../logistic-systems/logistic-systems.data';
import * as Chance from 'chance';

const chance = new Chance();

chance.mixin({
  logEntry: () => {
    const logLevel: LogLevel = chance.pickone(logLevels);
    return {
      systemId: chance.pickone(logisticSystems).id,
      timestamp: chance.date({min: new Date(2020, 1, 1), max: new Date(2020, 6, 30)}),
      level: logLevel,
      message: logLevel + ' Message'
    }
  }
});

/** Some log entries to play with */
export const logEntries: LogEntryList = 
  chance.n((chance as any).logEntry, 500);
