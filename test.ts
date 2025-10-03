import { VisualStudioCode } from "./lib/apps/visual-studio-code";

const app = VisualStudioCode;

const result = await app.checkIsFixed();

console.log(result);
