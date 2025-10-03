import { Bruno } from "./lib/apps/bruno";

const app = Bruno;

const result = await app.checkIsFixed();

console.log(result);
