import { FixedStatus, type AppMeta } from "@/types";
import { findPattern } from "@/lib/findPattern";

export const Hey: AppMeta = {
  icon: "https://cdn.brandfetch.io/id-jhIB7GM/w/128/h/128/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1753048414047",
  id: "hey-stable",
  friendlyName: "HEY",
  twitter: "heyhey",
  async checkIsFixed() {
    const url = "https://www.hey.com/desktop/HEY-arm64.dmg";
    const pat = "_cornerMask";
    const result: { found: boolean; pos?: number } | null | undefined =
      await findPattern(url, pat);
    return result?.found ? FixedStatus.NOT_FIXED : FixedStatus.FIXED;
  },
};
