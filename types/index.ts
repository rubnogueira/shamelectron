export const FixedStatus = {
  FIXED: "fixed",
  NOT_FIXED: "not_fixed",
  UNKNOWN: "unknown",
} as const;
export type FixedStatus = (typeof FixedStatus)[keyof typeof FixedStatus];

export interface AppMeta {
  id: string;
  friendlyName: string;
  icon: string;
  twitter?: string;
  checkIsFixed: () => PromiseLike<FixedStatus>;
}

export interface AppRecord {
  id: string;
  friendlyName: string;
  icon: string;
  twitter?: string;
  isFixed: FixedStatus;
  lastChecked: number;
}
