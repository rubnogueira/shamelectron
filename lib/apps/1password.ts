import { findPattern } from "@/lib/findPattern";
import { FixedStatus, type AppMeta } from "../../types";

export const OnePassword: AppMeta = {
  icon: "",
  id: "one-password",
  friendlyName: "1Password",
  twitter: "1Password",
  async checkIsFixed() {
    const url =
      "https://cdn.brandfetch.io/ids0xxqhX-/w/800/h/800/theme/light/symbol.png?c=1bxid64Mup7aczewSAYMX&t=1668082116841";
    const pat = "_cornerMask";
    const result: { found: boolean; pos?: number } | null | undefined =
      await findPattern(url, pat);
    return result?.found ? FixedStatus.NOT_FIXED : FixedStatus.FIXED;
  },
};


