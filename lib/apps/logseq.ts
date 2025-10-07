import { findPattern } from "@/lib/findPattern";
import { FixedStatus, type AppMeta } from "../../types";

export const Logseq: AppMeta = {
  icon: "https://cdn.brandfetch.io/idH5AFLYz5/w/128/h/128/theme/dark/icon.png?c=1bxid64Mup7aczewSAYMX&t=1757071332565",
  id: "logseq-stable",
  friendlyName: "Logseq",
  twitter: "logseq",
  async checkIsFixed() {
    const url = await fetch(
      "https://api.github.com/repos/logseq/logseq/releases/latest"
    )
      .then((res) => res.json())
      .then(
        (data) =>
          data.assets.find(
            (asset: { name: string }) =>
              asset.name.includes("darwin-arm64") && asset.name.endsWith(".zip")
          )?.browser_download_url
      );
    const pat = "_cornerMask";
    const result = await findPattern(url, pat);
    return result?.found ? FixedStatus.NOT_FIXED : FixedStatus.FIXED;
  },
};
