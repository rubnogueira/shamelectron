import { findPattern } from "@/lib/findPattern";
import { FixedStatus, type AppMeta } from "../../types";

export const Canva: AppMeta = {
  icon: "https://cdn.brandfetch.io/id9mVQlyB1/w/128/h/128/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1725863485997",
  id: "canva",
  friendlyName: "Canva",
  twitter: "canva",
  async checkIsFixed() {
    const url = "https://www.canva.com/download/mac/universal/canva-desktop";
    const pat = "_cornerMask";
    const result = await findPattern(url, pat);
    return result?.found ? FixedStatus.NOT_FIXED : FixedStatus.FIXED;
  },
};
