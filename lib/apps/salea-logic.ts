import { FixedStatus, type AppMeta } from "@/types";
import { findPattern } from "@/lib/findPattern";

export const SaleaLogic: AppMeta = {
  icon: "https://cdn.brandfetch.io/id1JR10AXb/w/128/h/128/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1753768754460",
  id: "salea-logic-stable",
  friendlyName: "Salea Logic",
  twitter: "salea",
  async checkIsFixed() {
    const url = "https://logic2api.saleae.com/download?os=osx&arch=arm64";
    const pat = "_cornerMask";
    const result = await findPattern(url, pat);
    return result?.found ? FixedStatus.NOT_FIXED : FixedStatus.FIXED;
  },
};
