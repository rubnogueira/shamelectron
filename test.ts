import { MongoDBCompass } from "./lib/apps/mongodb-compass";

const app = MongoDBCompass;

const result = await app.checkIsFixed();

console.log(result);
