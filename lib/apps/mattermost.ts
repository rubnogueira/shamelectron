import { findPattern } from "@/lib/findPattern";
import { FixedStatus, type AppMeta } from "../../types";

export const Mattermost: AppMeta = {
  // prettier-ignore
  icon: "https://cdn.brandfetch.io/idposL-v8U/w/128/h/128/theme/dark/icon.png?c=1bxid64Mup7aczewSAYMX&t=1670403046497",
  id: "mattermost-stable",
  friendlyName: "Mattermost",
  twitter: "mattermost",
  async checkIsFixed() {
    const url = await fetch(
      "https://api.github.com/repos/mattermost/desktop/releases/latest"
    )
      .then((res) => res.json())
      .then(
        (data) =>
          data.assets.find(
            (asset: { name: string }) =>
              asset.name.endsWith("-m1.dmg") ||
              asset.name.endsWith("-universal.dmg")
          )?.browser_download_url
      );
    const pat = "_cornerMask";
    const result: { found: boolean; pos?: number } | null | undefined =
      await findPattern(url, pat);
    return result?.found ? FixedStatus.NOT_FIXED : FixedStatus.FIXED;
  },
};
