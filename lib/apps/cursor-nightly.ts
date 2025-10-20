import { FixedStatus, type AppMeta } from "@/types";

export const CursorNightly: AppMeta = {
  icon: "https://cdn.brandfetch.io/ideKwS9dxx/w/128/h/128/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1741336988021",
  id: "cursor-nightly",
  friendlyName: "Cursor Nightly (1.9.0+)",
  twitter: "cursor_ai",
  async checkIsFixed() {
    /**
     * Cursor Nightly 1.9.0-pre.1.patch.0 incorporates a hotfix that successfully fixes the GPU issue.
     *
     *
     * https://github.com/cursor/cursor/issues/3672#issuecomment-3423812356
     */
    return FixedStatus.FIXED;
  },
};
