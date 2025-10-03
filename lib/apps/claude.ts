import { findPattern } from "@/lib/findPattern";
import { FixedStatus, type AppMeta } from "../../types";

export const Claude: AppMeta = {
  icon: "https://cdn.brandfetch.io/idW5s392j1/w/128/h/128/theme/dark/icon.png?c=1bxid64Mup7aczewSAYMX&t=1738315794862",
  id: "claude-stable",
  friendlyName: "Claude App",
  twitter: "claudeai",
  async checkIsFixed() {
    const url =
      "https://storage.googleapis.com/osprey-downloads-c02f6a0d-347c-492b-a752-3e0651722e97/nest/Claude.dmg";
    const pat = "_cornerMask";
    const result: { found: boolean; pos?: number } | null | undefined =
      await findPattern(url, pat);
    return result?.found ? FixedStatus.NOT_FIXED : FixedStatus.FIXED;
  },
};
