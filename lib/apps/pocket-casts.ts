import { findPattern } from "@/lib/findPattern";
import { FixedStatus, type AppMeta } from "../../types";

export const PocketCasts: AppMeta = {
  icon: "https://cdn.brandfetch.io/idZHcZ_i7F/w/320/h/320/theme/dark/icon.png?c=1bxid64Mup7aczewSAYMX&t=1729268227605",
  id: "pocket-casts",
  friendlyName: "Pocket Casts",
  twitter: "pocketcasts",
  async checkIsFixed() {
    const url =
      "https://pocketcasts.com/get/mac";
    const pat = "_cornerMask";
    const result: { found: boolean; pos?: number } | null | undefined =
      await findPattern(url, pat);
    return result?.found ? FixedStatus.NOT_FIXED : FixedStatus.FIXED;
  },
};
