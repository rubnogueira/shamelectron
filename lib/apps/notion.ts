import { FixedStatus, type AppMeta } from "@/types";
import { findPattern } from "@/lib/findPattern";

export const Notion: AppMeta = {
  icon: "https://cdn.brandfetch.io/idYnkdM3Ni/w/128/h/128/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1667896752278",
  id: "notion-stable",
  friendlyName: "Notion",
  twitter: "notion",
  async checkIsFixed() {
    const url = "https://www.notion.com/desktop/mac-apple-silicon/download";
    const pat = "_cornerMask";
    const result = await findPattern(url, pat);
    return result?.found ? FixedStatus.NOT_FIXED : FixedStatus.FIXED;
  },
};
