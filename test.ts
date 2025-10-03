import { Discord } from "./lib/apps/discord";

const app = Discord;

const result = await app.checkIsFixed();

console.log(result);
