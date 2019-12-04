import {createAction} from "../utils/actionReduce";
import {Table} from "../reducers/database";

export const stateReset = createAction("STATE/RESET");

export const mobileMenuToggle = createAction("MOBILE_MENU/TOGGLE");
export const mobileMenuClose = createAction("MOBILE_MENU/CLOSE");

export const navigateSettings = createAction("NAVIGATE/SETTINGS");
export const navigateWelcome = createAction("NAVIGATE/WELCOME");
export const navigateRelations = createAction("NAVIGATE/RELATIONS");
export const navigateRelation = createAction("NAVIGATE/RELATION", (n: string) => n);
export const navigateCurrentRelation = createAction("NAVIGATE/CURRENT_RELATION");

export const settingsChangeHost = createAction("SETTINGS/CHANGE/HOST", (s: string) => s);
export const settingsChangePort = createAction("SETTINGS/CHANGE/PORT", (n: number) => n);
export const settingsChangeDatabase = createAction("SETTINGS/CHANGE/DATABASE", (s: string) => s);
export const settingsChangeUser = createAction("SETTINGS/CHANGE/USER", (s: string) => s);
export const settingsChangePassword = createAction("SETTINGS/CHANGE/PASSWORD", (s: string) => s);

export const databasePool = createAction("DATABASE/POOL");
export const databaseErr = createAction("DATABASE/ERR", (s: string) => s);
export const databaseOk = createAction("DATABASE/OK", (p: [string, Table[]]) => p);
export const databaseEnd = createAction("DATABASE/END");
