import { FixedStatus, type AppMeta, type AppRecord } from "@/types";
import { APPS } from "@/lib/apps";

type AppInfo = {
  id: string;
  isFixed: FixedStatus;
  lastChecked: number;
};

// Singleton Redis client for the build process
let redisClient: Bun.RedisClient | null = null;
async function getRedisClient() {
  if (redisClient) {
    return redisClient;
  }
  const newClient = new Bun.RedisClient(process.env.REDIS_URL);

  await newClient.connect();
  redisClient = newClient;
  return redisClient;
}

class Core {
  private getDefaultAppInfo(id: string): AppInfo {
    return {
      id,
      isFixed: FixedStatus.UNKNOWN,
      lastChecked: Math.floor(Date.now() / 1000),
    };
  }

  private getKeyForApp(id: string) {
    return `app:${id}`;
  }

  public async setIsFixed(id: string, fixedStatus: FixedStatus) {
    const client = await getRedisClient();
    const appInfo: AppInfo = {
      id,
      isFixed: fixedStatus,
      lastChecked: Math.floor(Date.now() / 1000),
    };

    await client.set(this.getKeyForApp(id), JSON.stringify(appInfo));
  }

  public async getAllApps(): Promise<Map<string, AppInfo>> {
    const client = await getRedisClient();
    const ids = APPS.map((app) => this.getKeyForApp(app.id));
    if (ids.length === 0) {
      return new Map();
    }
    // Bun.RedisClient.mget expects ...args, not an array
    const values = await client.mget(...ids);
    const result = new Map<string, AppInfo>();

    APPS.forEach((app, i) => {
      const val = values[i];
      result.set(
        app.id,
        val ? JSON.parse(val) : this.getDefaultAppInfo(app.id)
      );
    });
    return result;
  }

  /** For static generation: merge app metadata with stored states (or defaults) */
  public async computeStaticApps(): Promise<AppRecord[]> {
    const statuses = await this.getAllApps();
    return APPS.map((meta) => {
      const s = statuses.get(meta.id);
      return {
        id: meta.id,
        icon: meta.icon,
        friendlyName: meta.friendlyName,
        twitter: meta.twitter,
        isFixed: s?.isFixed ?? FixedStatus.UNKNOWN,
        lastChecked: s?.lastChecked ?? Math.floor(Date.now() / 1000),
      };
    });
  }

  public isStale(lastChecked: number): boolean {
    const STALE_SECONDS = 6 * 60 * 60; // 6 hours
    const now = Math.floor(Date.now() / 1000);
    return now - lastChecked > STALE_SECONDS;
  }
}

export const core = new Core();
