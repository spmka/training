/** Definition os a hardware usage record */
export interface HardwareUsage {
  systemId: number;
  timestamp: Date;
  threads: number;
  cpuUsage: number;
  diskUsageGB: number;
}

/** A list of hardware records */
export type HardwareUsageList = Array<HardwareUsage>;