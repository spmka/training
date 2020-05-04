import {HardwareUsageList} from './hardware-usage.model';
import {logisticSystems} from '../logistic-systems/logistic-systems.data';
import * as Chance from 'chance';

/** Provides the actual hardware usage data */
export class HardwareUsageProvider {
 
  public getHardwareUsages(): HardwareUsageList {
    const chance = new Chance();

    chance.mixin({
      hardwareUsage: () => {
        const threads = chance.integer({min: 1, max: 20});
        return {
          systemId: chance.pickone(logisticSystems).id,
          timestamp: chance.date({min: new Date(2020, 1, 1), max: new Date(2020, 6, 30)}),
          threads: threads,
          cpuUsage: chance.floating({fixed: 3, min: threads * 10, max: threads * 100}),
          diskUsageGB: chance.floating({fixed: 3, min: 10, max: 2000})
        }
      }
    });
    
    return chance.n((chance as any).hardwareUsage, 500);
  }
}

