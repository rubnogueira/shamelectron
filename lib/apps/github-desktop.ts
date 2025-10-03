import { findPattern } from "@/lib/findPattern";
import { FixedStatus, type AppMeta } from "../../types";

export const GitHubDesktop: AppMeta = {
  icon: "https://cdn.brandfetch.io/idZAyF9rlg/w/128/h/128/theme/dark/icon.png?c=1bxid64Mup7aczewSAYMX&t=1719469970995",
  id: "github-desktop-stable",
  friendlyName: "GitHub Desktop",
  twitter: "github",
  async checkIsFixed() {
    const url =
      "https://central.github.com/deployments/desktop/desktop/latest/darwin-arm64";
    const pat = "_cornerMask";
    const result: { found: boolean; pos?: number } | null | undefined =
      await findPattern(url, pat);
    return result?.found ? FixedStatus.NOT_FIXED : FixedStatus.FIXED;
  },
};
