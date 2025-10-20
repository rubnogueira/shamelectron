import { FixedStatus, type AppMeta } from "@/types";
import { findPattern } from "@/lib/findPattern";

export const Termius: AppMeta = {
  icon: "https://cdn.brandfetch.io/idq9jBtFK8/w/180/h/180/theme/dark/logo.png?c=1bxid64Mup7aczewSAYMX&t=1760357606196",
  id: "termius",
  friendlyName: "Termius",
  twitter: "termiushq",
  async checkIsFixed() {
    const url = "https://autoupdate.termius.com/mac-universal/Termius.dmg";
    const pat = "_cornerMask";
    const result = await findPattern(url, pat);
    return result?.found ? FixedStatus.NOT_FIXED : FixedStatus.FIXED;
  },
};
