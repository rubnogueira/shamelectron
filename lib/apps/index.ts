import { OnePassword } from "./1password";
import { DockerDesktop } from "./docker";
import { ArduinoIDE } from "./arduino-ide";
import { BalenaEtcher } from "./balena-etcher";
import { Beeper } from "./beeper";
import { Bitwarden } from "./bitwarden";
import { Bruno } from "./bruno";
import { Claude } from "./claude";
import { Cluely } from "./cluely";
import { Cursor } from "./cursor";
import { Discord } from "./discord";
import { DiscordCanary } from "./discord-canary";
import { Figma } from "./figma";
import { GitHubDesktop } from "./github-desktop";
import { Hey } from "./hey";
import { GitKraken } from "./gitkraken";
import { Logseq } from "./logseq";
import { Notion } from "./notion";
import { NotionCalendar } from "./notion-calendar";
import { NotionMail } from "./notion-mail";
import { Obsidian } from "./obsidian";
import { PocketCasts } from "./pocket-casts";
import { Postman } from "./postman";
import { SaleaLogic } from "./salea-logic";
import { Signal } from "./signal";
import { Slack } from "./slack";
import { VisualStudioCode } from "./visual-studio-code";
import { VisualStudioCodeInsiders } from "./visual-studio-code-insiders";
import { LMStudio } from "./lmstudio";
import { Windsurf } from "./windsurf";
import { Dropbox } from "./dropbox";
import { Kiro } from "./kiro";

import type { AppMeta } from "../../types";

export const APPS: AppMeta[] = [
  ArduinoIDE,
  BalenaEtcher,
  Beeper,
  Bitwarden,
  Bruno,
  Claude,
  Cluely,
  Cursor,
  Discord,
  DiscordCanary,
  Figma,
  GitHubDesktop,
  DockerDesktop,
  Notion,
  NotionCalendar,
  NotionMail,
  Obsidian,
  OnePassword,
  PocketCasts,
  Postman,
  SaleaLogic,
  Signal,
  Slack,
  VisualStudioCode,
  VisualStudioCodeInsiders,
  Windsurf,
  Logseq,
  LMStudio,
  Hey,
  GitKraken,
  Dropbox,
  Kiro,
];
export default APPS;
