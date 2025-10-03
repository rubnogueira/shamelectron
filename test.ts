import { Notion } from "./lib/apps/notion";

const app = Notion;

const result = await app.checkIsFixed();

console.log(result);
