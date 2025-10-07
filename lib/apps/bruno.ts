import { findPattern } from "@/lib/findPattern";
import { FixedStatus, type AppMeta } from "../../types";

export const Bruno: AppMeta = {
  icon: "https://raw.githubusercontent.com/usebruno/bruno/main/assets/images/logo-transparent.png",
  id: "bruno-stable",
  friendlyName: "Bruno",
  twitter: "use_bruno",
  async checkIsFixed() {
    const url = await fetch(
      "https://api.github.com/repos/usebruno/bruno/releases/latest"
    )
      .then((res) => res.json())
      .then(
        (data) =>
          data.assets.find((asset: { name: string }) =>
            asset.name.endsWith("arm64_mac.zip")
          )?.browser_download_url
      );
    const pat = "_cornerMask";
    const result = await findPattern(url, pat);
    return result?.found ? FixedStatus.NOT_FIXED : FixedStatus.FIXED;
  },
};
