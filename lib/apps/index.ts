import { Claude } from "./claude";
import { Cluely } from "./cluely";
import { Cursor } from "./cursor";
import { Bruno } from "./bruno";
import { Discord } from "./discord";
import { DiscordCanary } from "./discord-canary";
import { Figma } from "./figma";
import { GitHubDesktop } from "./github-desktop";
import { Notion } from "./notion";
import { PocketCasts } from "./pocket-casts";
import { Postman } from "./postman";
import { Signal } from "./signal";
import { Slack } from "./slack";
import { VisualStudioCode } from "./visual-studio-code";
import { VisualStudioCodeInsiders } from "./visual-studio-code-insiders";
import { Windsurf } from "./windsurf";
import { Beeper } from "./beeper";
import { OnePassword } from "./1password";
import { Bitwarden } from "./bitwarden";
import { Obsidian } from "./obsidian";
import { BalenaEtcher } from "./balena-etcher";
import { SaleaLogic } from "./salea-logic";
import { NotionCalendar } from "./notion-calendar";
import { NotionMail } from "./notion-mail";

import type { AppMeta } from "../../types";

export const APPS: AppMeta[] = [
  Cluely,
  Cursor,
  Claude,
  Discord,
  DiscordCanary,
  Figma,
  GitHubDesktop,
  Notion,
  PocketCasts,
  Postman,
  Signal,
  Slack,
  VisualStudioCode,
  VisualStudioCodeInsiders,
  Windsurf,
  OnePassword,
  Beeper,
  Bruno,
  BalenaEtcher,
  Bitwarden,
  SaleaLogic,
  NotionCalendar,
  NotionMail,
  Obsidian,
];
export default APPS;
