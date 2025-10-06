import { findPattern } from "@/lib/findPattern";
import { FixedStatus, type AppMeta } from "../../types";

export const MongoDBCompass: AppMeta = {
  icon: "https://cdn.brandfetch.io/ideyyfT0Lp/w/128/h/128/theme/dark/icon.png?c=1bxid64Mup7aczewSAYMX&t=1671109848386",
  id: "mongodb-compass-stable",
  friendlyName: "MongoDB Compass",
  twitter: "mattermost",
  async checkIsFixed() {
    const url = await fetch(
      "https://api.github.com/repos/mongodb-js/compass/releases/latest"
    )
      .then((res) => res.json())
      .then(
        (data) =>
          data.assets.find((asset: { name: string }) =>
            asset.name.endsWith("-darwin-arm64.zip")
          )?.browser_download_url
      );
    const pat = "_cornerMask";
    const result: { found: boolean; pos?: number } | null | undefined =
      await findPattern(url, pat);
    return result?.found ? FixedStatus.NOT_FIXED : FixedStatus.FIXED;
  },
};
