import { findPattern } from "@/lib/findPattern";
import { FixedStatus, type AppMeta } from "../../types";

export const Bitwarden: AppMeta = {
  icon: "https://cdn.brandfetch.io/idoK_yj68K/w/128/h/128/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1690486241518",
  id: "bitwarden",
  friendlyName: "Bitwarden",
  twitter: "bitwarden",
  async checkIsFixed() {
    const url =
      "https://bitwarden.com/download/?app=desktop&platform=macos&variant=dmg";
    const pat = "_cornerMask";
    const result = await findPattern(url, pat);
    return result?.found ? FixedStatus.NOT_FIXED : FixedStatus.FIXED;
  },
};
