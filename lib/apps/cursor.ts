import { FixedStatus, type AppMeta } from "@/types";
import { findPattern } from "@/lib/findPattern";

export const Cursor: AppMeta = {
  icon: "https://cdn.brandfetch.io/ideKwS9dxx/w/128/h/128/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1741336988021",
  id: "cursor-stable",
  friendlyName: "Cursor",
  twitter: "cursor_ai",
  async checkIsFixed() {
    const url =
      "https://api2.cursor.sh/updates/download/golden/darwin-arm64/cursor/latest";
    const pat = "_cornerMask";
    const result: { found: boolean; pos?: number } | null | undefined =
      await findPattern(url, pat);
    return result?.found ? FixedStatus.NOT_FIXED : FixedStatus.FIXED;
  },
};
