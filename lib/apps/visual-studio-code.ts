import { findPattern } from "@/lib/findPattern";
import { FixedStatus, type AppMeta } from "../../types";

export const VisualStudioCode: AppMeta = {
  icon: "https://cdn.brandfetch.io/idIkI_7uw6/w/128/h/128/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1756787305385",
  id: "visual-studio-code-stable",
  friendlyName: "Visual Studio Code",
  twitter: "code",
  async checkIsFixed() {
    const url =
      "https://code.visualstudio.com/sha/download?build=stable&os=darwin-universal";
    const pat = "_cornerMask";
    const result: { found: boolean; pos?: number } | null | undefined =
      await findPattern(url, pat);
    return result?.found ? FixedStatus.NOT_FIXED : FixedStatus.FIXED;
  },
};
