import { findPattern } from "@/lib/findPattern";
import { FixedStatus, type AppMeta } from "../../types";

export const Slack: AppMeta = {
  icon: "https://cdn.brandfetch.io/idJ_HhtG0Z/w/128/h/128/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1745381282564",
  id: "slack-stable",
  friendlyName: "Slack",
  twitter: "slackhq",
  async checkIsFixed() {
    const url =
      "https://slack.com/api/desktop.latestRelease?arch=arm64&variant=dmg&redirect=true";
    const pat = "_cornerMask";
    const result: { found: boolean; pos?: number } | null | undefined =
      await findPattern(url, pat);
    return result?.found ? FixedStatus.NOT_FIXED : FixedStatus.FIXED;
  },
};
