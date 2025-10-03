import { findPattern } from "@/lib/findPattern";
import { FixedStatus, type AppMeta } from "../../types";

export const Figma: AppMeta = {
  icon: "https://cdn.brandfetch.io/idZHcZ_i7F/w/320/h/320/theme/dark/icon.png?c=1bxid64Mup7aczewSAYMX&t=1729268227605",
  id: "figma-stable",
  friendlyName: "Figma",
  twitter: "figma",
  async checkIsFixed() {
    const url =
      "https://www.figma.com/download/desktop/mac";
    const pat = "_cornerMask";
    const result: { found: boolean; pos?: number } | null | undefined =
      await findPattern(url, pat);
    return result?.found ? FixedStatus.NOT_FIXED : FixedStatus.FIXED;
  },
};
