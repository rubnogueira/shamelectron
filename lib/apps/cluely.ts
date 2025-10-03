import { findPattern } from "@/lib/findPattern";
import { FixedStatus, type AppMeta } from "../../types";

export const Cluely: AppMeta = {
  icon: "https://cdn.brandfetch.io/idCSRE3cOk/w/128/h/128/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1752719809988",
  id: "cluely-stable",
  friendlyName: "Cluely",
  twitter: "cluely",
  async checkIsFixed() {
    const url = "https://downloads.cluely.com/downloads/cluely.dmg";
    const pat = "_cornerMask";
    const result: { found: boolean; pos?: number } | null | undefined =
      await findPattern(url, pat);
    return result?.found ? FixedStatus.NOT_FIXED : FixedStatus.FIXED;
  },
};
