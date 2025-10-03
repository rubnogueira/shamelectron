import { FixedStatus, type AppMeta } from "@/types";
import { findPattern } from "@/lib/findPattern";

export const Discord: AppMeta = {
  icon: "https://cdn.brandfetch.io/idM8Hlme1a/w/128/h/128/theme/dark/icon.png?c=1bxid64Mup7aczewSAYMX&t=1667560105720",
  id: "discord-stable",
  friendlyName: "Discord",
  twitter: "discord",
  async checkIsFixed() {
    const url = "https://discord.com/api/download?platform=osx";
    const pat = "_cornerMask";
    const result: { found: boolean; pos?: number } | null | undefined =
      await findPattern(url, pat);
    console.log(result);
    return result?.found ? FixedStatus.NOT_FIXED : FixedStatus.FIXED;
  },
};
