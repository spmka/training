/** Describes a logistic system */
export interface LogisticSystem {
  /** The id of the system */
  id: number;
  /** The name of the system */
  name: string;
}

/** A list of logistic systems */
// export type LogisticSystemList = Array<LogisticSystem>;
export type LogisticSystemList = LogisticSystem[];