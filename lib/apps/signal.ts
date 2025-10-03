import { findPattern } from "@/lib/findPattern";
import { FixedStatus, type AppMeta } from "../../types";

export const Signal: AppMeta = {
  icon: "https://cdn.brandfetch.io/idwiNfPKaM/w/128/h/128/theme/dark/icon.png?c=1bxid64Mup7aczewSAYMX&t=1740365382910",
  id: "signal-stable",
  friendlyName: "Signal",
  twitter: "signalapp",
  async checkIsFixed() {
    const versions = await fetch(
      "https://updates.signal.org/desktop/latest-mac.yml"
    )
      .then((res) => res.text())
      .then(
        (text) =>
          Bun.YAML.parse(text) as {
            version: string;
            files: {
              url: string;
              sha512: string;
              size: number;
            }[];
          }
      );

    const filename = versions.files?.find((file) =>
      file.url.includes("mac-universal")
    )?.url;
    const url = `https://updates.signal.org/desktop/${filename}`;

    const pat = "_cornerMask";
    const result: { found: boolean; pos?: number } | null | undefined =
      await findPattern(url, pat);
    return result?.found ? FixedStatus.NOT_FIXED : FixedStatus.FIXED;
  },
};
