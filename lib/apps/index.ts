import { Claude } from "./claude";
import { Cluely } from "./cluely";
import { Cursor } from "./cursor";
import { Discord } from "./discord";
import { GitHubDesktop } from "./github-desktop";
import { Notion } from "./notion";
import { Postman } from "./postman";
import { Signal } from "./signal";
import { Slack } from "./slack";
import { VisualStudioCode } from "./visual-studio-code";
import { VisualStudioCodeInsiders } from "./visual-studio-code-insiders";
import { Windsurf } from "./windsurf";
import { Beeper } from "./beeper";
import type { AppMeta } from "../../types";

export const APPS: AppMeta[] = [
  Cluely,
  Cursor,
  Claude,
  Discord,
  GitHubDesktop,
  Notion,
  Postman,
  Signal,
  Slack,
  VisualStudioCode,
  VisualStudioCodeInsiders,
  Windsurf,
  Beeper,
];
export default APPS;
