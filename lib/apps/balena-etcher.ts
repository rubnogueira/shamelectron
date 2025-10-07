import { findPattern } from "@/lib/findPattern";
import { FixedStatus, type AppMeta } from "../../types";

export const BalenaEtcher: AppMeta = {
  // prettier-ignore
  icon: "https://cdn.brandfetch.io/id6vfMEozM/w/128/h/128/theme/dark/logo.png?c=1bxid64Mup7aczewSAYMX&t=1726185885159",
  id: "balena-etcher-stable",
  friendlyName: "Balena Etcher",
  twitter: "balena_io",
  async checkIsFixed() {
    const url = await fetch(
      "https://api.github.com/repos/balena-io/etcher/releases/latest"
    )
      .then((res) => res.json())
      .then(
        (data) =>
          data.assets.find(
            (asset: { name: string }) =>
              asset.name.startsWith("balenaEtcher-darwin-arm64") &&
              asset.name.endsWith(".zip")
          )?.browser_download_url
      );
    const pat = "_cornerMask";
    const result = await findPattern(url, pat);
    return result?.found ? FixedStatus.NOT_FIXED : FixedStatus.FIXED;
  },
};
