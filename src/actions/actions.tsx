import {createAction} from "../utils/actionReduce";

export const mobileMenuToggle = createAction("MOBILE_MENU/TOGGLE");
export const mobileMenuClose = createAction("MOBILE_MENU/CLOSE");

export const navigateSettings = createAction("NAVIGATE/SETTINGS");

export const settingsChangeHost = createAction("SETTINGS/CHANGE/HOST", (s: string) => s);
export const settingsChangePort = createAction("SETTINGS/CHANGE/PORT", (n: number) => n);
export const settingsChangeDatabase = createAction("SETTINGS/CHANGE/DATABASE", (s: string) => s);
export const settingsChangeUser = createAction("SETTINGS/CHANGE/USER", (s: string) => s);
export const settingsChangePassword = createAction("SETTINGS/CHANGE/PASSWORD", (s: string) => s);
export const databaseErr = createAction("DATABASE/ERR", (s: string) => s);
export const databaseOk = createAction("DATABASE/OK", (s: string) => s);
