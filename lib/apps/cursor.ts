import { FixedStatus, type AppMeta } from "@/types";
import { findPattern } from "@/lib/findPattern";

export const Cursor: AppMeta = {
  icon: "https://cdn.brandfetch.io/ideKwS9dxx/w/128/h/128/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1741336988021",
  id: "cursor-stable",
  friendlyName: "Cursor",
  twitter: "cursor_ai",
  async checkIsFixed() {
    return FixedStatus.FIXED; // 2.0+ is fixed with a patch
  },
};
