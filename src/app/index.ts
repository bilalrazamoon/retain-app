import * as services from "./services";
import { Store } from "./store";

const mapValuesToArr = (obj) => Object.keys(obj).map(key => obj[key]);

export const PROVIDERS = [
    Store,
    ...mapValuesToArr(services)
];

export { App } from "./app"