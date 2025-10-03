import { Claude } from "./claude";
import { Cluely } from "./cluely";
import { Cursor } from "./cursor";
import { Discord } from "./discord";
import { DiscordCanary } from "./discord-canary";
import { Figma } from './figma';
import { FigmaBeta } from './figma-beta';
import { GitHubDesktop } from "./github-desktop";
import { Notion } from "./notion";
import { PocketCasts } from './pocket-casts'
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
  DiscordCanary,
  Figma,
  FigmaBeta,
  GitHubDesktop,
  Notion,
  PocketCasts,
  Postman,
  Signal,
  Slack,
  VisualStudioCode,
  VisualStudioCodeInsiders,
  Windsurf,
  Beeper,
];
export default APPS;
