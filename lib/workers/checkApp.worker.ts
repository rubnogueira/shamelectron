import { APPS } from "../apps";
import { FixedStatus } from "@/types";

type InMsg = { id: string };
type OutMsg =
  | {
      id: string;
      ok: true;
      fixed: (typeof FixedStatus)[keyof typeof FixedStatus];
    }
  | { id: string; ok: false; error: string };

// Bun implements the Web Worker API in workers
onmessage = async (evt: MessageEvent<InMsg>) => {
  const { id } = evt.data;
  try {
    const meta = APPS.find((a) => a.id === id);
    if (!meta) {
      postMessage({
        id,
        ok: false,
        error: `Unknown app id: ${id}`,
      } satisfies OutMsg);
      return;
    }

    const fixed = await meta.checkIsFixed();
    postMessage({ id, ok: true, fixed } satisfies OutMsg);
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    postMessage({ id, ok: false, error: msg } satisfies OutMsg);
  }
};

export {};
