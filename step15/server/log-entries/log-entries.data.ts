import {LogEntryList, LogLevel, logLevels} from './log-entry.model';
import {logisticSystems} from '../logistic-systems/logistic-systems.data';
import * as Chance from 'chance';

/** Provides the actual log entries data */
export class LogEntriesProvider {

  public getLogEntries(): LogEntryList {
    const chance = new Chance();

    chance.mixin({
      logEntry: () => {
        const logLevel: LogLevel = chance.pickone(logLevels);
        return {
          systemId: chance.pickone(logisticSystems).id,
          timestamp: chance.date({min: new Date(2020, 1, 1), max: new Date(2020, 6, 30)}),
          level: logLevel,
          message: logLevel + ' Message ' + chance.sentence()
        }
      }
    });
    
    return chance.n((chance as any).logEntry, 500);
  }

}