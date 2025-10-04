import { findPattern } from "@/lib/findPattern";
import { FixedStatus, type AppMeta } from "../../types";

export const ArduinoIDE: AppMeta = {
  icon: "https://cdn.brandfetch.io/idtGUB17gh/w/128/h/128/theme/dark/icon.png?c=1bxid64Mup7aczewSAYMX&t=1667813023270",
  id: "arduino-ide-stable",
  friendlyName: "Arduino IDE",
  twitter: "arduino",
  async checkIsFixed() {
    const url = await fetch(
      "https://api.github.com/repos/arduino/arduino-ide/releases/latest"
    )
      .then((res) => res.json())
      .then(
        (data) =>
          data.assets.find((asset: { name: string }) =>
            asset.name.endsWith("macOS_arm64.zip")
          )?.browser_download_url
      );
    const pat = "_cornerMask";
    const result: { found: boolean; pos?: number } | null | undefined =
      await findPattern(url, pat);
    return result?.found ? FixedStatus.NOT_FIXED : FixedStatus.FIXED;
  },
};
