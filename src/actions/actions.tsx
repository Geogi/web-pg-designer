import {createAction} from "../utils";

export const navigateSettings = createAction("NAVIGATE/SETTINGS");
export const navigatePage = createAction("NAVIGATE/PAGE", (arg: number) => arg);
