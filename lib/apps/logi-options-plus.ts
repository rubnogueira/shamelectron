import { findPattern } from "@/lib/findPattern";
import { FixedStatus, type AppMeta } from "../../types";

export const LogiOptionsPlus: AppMeta = {
  icon: "https://cdn.brandfetch.io/idX2nqEtNo/w/128/h/128/theme/dark/icon.png?c=1bxid64Mup7aczewSAYMX&t=1756407828651",
  id: "logi-options-plus-stable",
  friendlyName: "Logi Options+",
  twitter: "Logitech",
  async checkIsFixed() {
    const url =
      "https://download01.logi.com/web/ftp/pub/techsupport/optionsplus/logioptionsplus_installer.zip";
    const pat = "_cornerMask";
    const result: { found: boolean; pos?: number } | null | undefined =
      await findPattern(url, pat);
    return result?.found ? FixedStatus.NOT_FIXED : FixedStatus.FIXED;
  },
};
