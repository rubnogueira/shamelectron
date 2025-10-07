import { findPattern } from "@/lib/findPattern";
import { FixedStatus, type AppMeta } from "../../types";

export const Windsurf: AppMeta = {
  icon: "https://cdn.brandfetch.io/id5pWZwY_5/w/128/h/128/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1752603168917",
  id: "windsurf-stable",
  friendlyName: "Windsurf",
  twitter: "windsurf_ai",
  async checkIsFixed() {
    const url = await fetch(
      "https://windsurf-stable.codeium.com/api/update/darwin-arm64-dmg/stable/latest"
    )
      .then((res) => res.json())
      .then((data) => data.url);

    const pat = "_cornerMask";
    const result = await findPattern(url, pat);
    return result?.found ? FixedStatus.NOT_FIXED : FixedStatus.FIXED;
  },
};
