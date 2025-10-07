import { FixedStatus, type AppMeta } from "@/types";
import { findPattern } from "@/lib/findPattern";

export const GitKraken: AppMeta = {
  icon: "https://cdn.brandfetch.io/id8KASe1rU/w/400/h/400/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1752566817684",
  id: "gitkraken-stable",
  friendlyName: "GitKraken",
  twitter: "gitkraken",
  async checkIsFixed() {
    const url =
      "https://api.gitkraken.dev/releases/production/darwin/arm64/active/installGitKraken.dmg";
    const pat = "_cornerMask";
    const result = await findPattern(url, pat);
    return result?.found ? FixedStatus.NOT_FIXED : FixedStatus.FIXED;
  },
};
