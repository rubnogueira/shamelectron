import { DockerDesktop } from "./lib/apps/docker";

const app = DockerDesktop;

const result = await app.checkIsFixed();

console.log(result);
