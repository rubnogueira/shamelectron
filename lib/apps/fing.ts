import { FixedStatus, type AppMeta } from "@/types";
import { findPattern } from "@/lib/findPattern";

export const Fing: AppMeta = {
  icon: "https://cdn.brandfetch.io/idw1mKuerT/w/128/h/128/theme/dark/icon.png?c=1bxid64Mup7aczewSAYMX&t=1754953382132",
  id: "fing",
  friendlyName: "Fing",
  twitter: "fingapp",
  async checkIsFixed() {
    const url = "https://get.fing.com/fing-desktop-releases/mac/Fing.dmg";
    const pat = "_cornerMask";
    const result = await findPattern(url, pat);
    return result?.found ? FixedStatus.NOT_FIXED : FixedStatus.FIXED;
  },
};
