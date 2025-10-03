import { Claude } from "./claude";
import { Cursor } from "./cursor";
import { Discord } from "./discord";
import { GitHubDesktop } from "./github-desktop";
import { Notion } from "./notion";
import { Postman } from "./postman";
import { Signal } from "./signal";
import { Slack } from "./slack";
import { VisualStudioCode } from "./visual-studio-code";
import type { AppMeta } from "../../types";

export const APPS: AppMeta[] = [
  Cursor,
  Claude,
  Discord,
  GitHubDesktop,
  Notion,
  Postman,
  Signal,
  Slack,
  VisualStudioCode,
];
export default APPS;
