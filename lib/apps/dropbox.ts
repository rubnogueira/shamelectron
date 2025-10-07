import { FixedStatus, type AppMeta } from "@/types";
import { findPattern } from "@/lib/findPattern";

export const Dropbox: AppMeta = {
  icon: "https://cdn.brandfetch.io/idY3kwH_Nx/w/400/h/400/theme/dark/icon.png?c=1bxid64Mup7aczewSAYMX&t=1691075441479",
  id: "dropbox-stable",
  friendlyName: "Dropbox",
  twitter: "dropbox",
  async checkIsFixed() {
    const url = "https://www.dropbox.com/download?plat=mac&full=1";
    const pat = "_cornerMask";
    const result = await findPattern(url, pat);
    return result?.found ? FixedStatus.NOT_FIXED : FixedStatus.FIXED;
  },
};
