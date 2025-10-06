import { findPattern } from "@/lib/findPattern";
import { FixedStatus, type AppMeta } from "../../types";

export const SuperProductivity: AppMeta = {
  // prettier-ignore
  icon: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'><path d='m0.65537 34.583 31.797 29.273 31.339-62.912-33.569 46.778z' fill='%23fff'/></svg>",
  id: "super-productivity-stable",
  friendlyName: "Super Productivity",
  twitter: "superproductivity",
  async checkIsFixed() {
    const url = await fetch(
      "https://api.github.com/repos/johannesjo/super-productivity/releases/latest"
    )
      .then((res) => res.json())
      .then(
        (data) =>
          data.assets.find((asset: { name: string }) =>
            asset.name.endsWith("arm64.dmg")
          )?.browser_download_url
      );
    const pat = "_cornerMask";
    const result: { found: boolean; pos?: number } | null | undefined =
      await findPattern(url, pat);
    return result?.found ? FixedStatus.NOT_FIXED : FixedStatus.FIXED;
  },
};
