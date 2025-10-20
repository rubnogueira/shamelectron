import { findPattern } from "@/lib/findPattern";
import { FixedStatus, type AppMeta } from "../../types";

export const Linear: AppMeta = {
  icon: "https://cdn.brandfetch.io/iduDa181eM/w/128/h/128/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1723620974313",
  id: "linear-stable",
  friendlyName: "Linear",
  twitter: "linear",
  async checkIsFixed() {
    const versions = await fetch(
      "https://download.todesktop.com/200315glz2793v6/latest-mac.yml"
    )
      .then((res) => res.text())
      .then(
        (text) =>
          Bun.YAML.parse(text) as {
            version: string;
            files: { url: string }[];
          }
      );

    const filename = versions.files?.find((file) =>
      file.url.includes("-arm64.dmg")
    )?.url;

    const url = `https://download.todesktop.com/200315glz2793v6/${filename}`;

    const pat = "_cornerMask";
    const result = await findPattern(url, pat, { useGetCheck: true });
    return result?.found ? FixedStatus.NOT_FIXED : FixedStatus.FIXED;
  },
};
