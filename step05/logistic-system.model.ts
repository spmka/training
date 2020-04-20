/** Describes a logistic system */
export interface LogisticSystem {
  id: number;
  name: string;
}

/** A list of logistic systems */
export type LogisticSystemList = Array<LogisticSystem>;
// export type LogisticSystemList = LogisticSystem[];