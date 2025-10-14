import { FixedStatus, type AppMeta } from "@/types";
import { $ } from "bun";
import { tmpdir } from "node:os";
import { getRedisClient } from "../core";

export const LogiOptions: AppMeta = {
  icon: "https://cdn.brandfetch.io/idX2nqEtNo/w/128/h/128/theme/dark/icon.png?c=1bxid64Mup7aczewSAYMX&t=1756407828651",
  id: "logi-options-stable",
  friendlyName: "Logi Options+",
  twitter: "logitech",
  async checkIsFixed() {
    const downloadUrl =
      "https://download01.logi.com/web/ftp/pub/techsupport/optionsplus/logioptionsplus_installer_offline.zip";
    const downloadFile = Bun.file(
      tmpdir() + "/logioptionsplus_installer_offline.zip"
    );

    const res = await fetch(downloadUrl);
    if (!res.ok) throw new Error(`Failed to download: ${res.statusText}`);

    {
      /**
       * Check if the content length is the same as the previous download
       * We can assume that the content length is the same if it's the same as the previous download,
       * so we can skip the download and return NOT_FIXED
       * (if it was fixed, we would not be here in the first place)
       */
      const contentLength = String(res.headers.get("content-length"));
      const redisKey = `app:${this.id}:content-length`;
      const redisClient = await getRedisClient();
      const oldContentLength = await redisClient.get(redisKey);
      if (
        contentLength &&
        oldContentLength &&
        oldContentLength === contentLength
      ) {
        return FixedStatus.NOT_FIXED;
      }
      await redisClient.set(redisKey, contentLength);
    }

    await Bun.write(downloadFile, res);

    const depotsZipFile = Bun.file(tmpdir() + "/depots.zip");
    await $`bsdtar -O -x -f "${downloadFile}" "logioptionsplus_installer_offline.app/Contents/Resources/depots.zip" > ${depotsZipFile}`;

    const extractedDepotFile = Bun.file(tmpdir() + "/depot");
    await $`bsdtar -O -x -f ${depotsZipFile} "logioptionsplus.depot" > ${extractedDepotFile}`;

    const payload = "_cornerMask";
    const isFound =
      (await $`rg -q -i --text "${payload}" ${extractedDepotFile}`).exitCode ===
      0;

    // cleanup
    await depotsZipFile.delete();
    await extractedDepotFile.delete();
    await downloadFile.delete();

    return isFound ? FixedStatus.NOT_FIXED : FixedStatus.FIXED;
  },
};
