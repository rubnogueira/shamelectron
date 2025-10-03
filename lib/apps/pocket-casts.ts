import { findPattern } from "@/lib/findPattern";
import { FixedStatus, type AppMeta } from "../../types";

export const PocketCasts: AppMeta = {
  icon: "https://cdn.brandfetch.io/ids8HGa-I3/w/128/h/128/theme/dark/logo.png?c=1bxid64Mup7aczewSAYMX&t=1740032928003",
  id: "pocket-casts",
  friendlyName: "Pocket Casts",
  twitter: "pocketcasts",
  async checkIsFixed() {
    const url = "https://pocketcasts.com/get/mac";
    const pat = "_cornerMask";
    const result: { found: boolean; pos?: number } | null | undefined =
      await findPattern(url, pat);
    return result?.found ? FixedStatus.NOT_FIXED : FixedStatus.FIXED;
  },
};
