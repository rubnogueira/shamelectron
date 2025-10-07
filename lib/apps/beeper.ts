import { findPattern } from "@/lib/findPattern";
import { FixedStatus, type AppMeta } from "../../types";

export const Beeper: AppMeta = {
  icon: "https://cdn.brandfetch.io/idbHZntkNh/w/128/h/128/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1714483824721",
  id: "beeper-stable",
  friendlyName: "Beeper",
  twitter: "beeper",
  async checkIsFixed() {
    const url =
      "https://api.beeper.com/desktop/download/macos/arm64/stable/com.automattic.beeper.desktop";
    const pat = "_cornerMask";
    const result = await findPattern(url, pat);
    return result?.found ? FixedStatus.NOT_FIXED : FixedStatus.FIXED;
  },
};
