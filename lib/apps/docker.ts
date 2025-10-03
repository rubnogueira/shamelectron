import { FixedStatus, type AppMeta } from "@/types";
import { findPattern } from "@/lib/findPattern";

export const DockerDesktop: AppMeta = {
  icon: "https://cdn.brandfetch.io/id5_eOiB6T/w/400/h/400/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1707508241645",
  id: "docker-desktop",
  friendlyName: "Docker Desktop",
  twitter: "docker",
  async checkIsFixed() {
    const url = "https://desktop.docker.com/mac/main/arm64/Docker.dmg";
    const pat = "_cornerMask";
    const result: { found: boolean; pos?: number } | null | undefined =
      await findPattern(url, pat);
    console.log(result);
    return result?.found ? FixedStatus.NOT_FIXED : FixedStatus.FIXED;
  },
};
