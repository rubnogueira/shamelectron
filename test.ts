import { NotionCalendar } from "./lib/apps/notion-calendar";

const app = NotionCalendar;

const result = await app.checkIsFixed();

console.log(result);
