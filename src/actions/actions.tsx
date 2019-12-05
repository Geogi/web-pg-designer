import {createAction} from "../utils/actionReduce";
import {Table} from "../reducers/database";
import {Page} from "../reducers/navigation";

export const stateReset = createAction("STATE/RESET");

export const mobileMenuToggle = createAction("MOBILE_MENU/TOGGLE");
export const mobileMenuClose = createAction("MOBILE_MENU/CLOSE");

export const navigatePage = createAction("NAVIGATE/PAGE", (p: Page) => p);
export const navigateRelation = createAction(
  "NAVIGATE/RELATION",
  (n: string) => n
);

export const settingsHost = createAction("SETTINGS/HOST", (s: string) => s);
export const settingsPort = createAction("SETTINGS/PORT", (n: number) => n);
export const settingsDatabase = createAction(
  "SETTINGS/DATABASE",
  (s: string) => s
);
export const settingsUser = createAction("SETTINGS/USER", (s: string) => s);
export const settingsPassword = createAction(
  "SETTINGS/PASSWORD",
  (s: string) => s
);

export const databasePool = createAction("DATABASE/POOL");
export const databaseErr = createAction("DATABASE/ERR", (s: string) => s);
export const databaseOk = createAction(
  "DATABASE/OK",
  (p: [string, Table[]]) => p
);
export const databaseEnd = createAction("DATABASE/END");

export const relationsCreateShow = createAction(
  "RELATIONS/CREATE/SHOW",
  (b: boolean) => b
);
export const relationsCreateName = createAction(
  "RELATIONS/CREATE/NAME",
  (s: string) => s
);
export const relationsCreateErr = createAction(
  "RELATIONS/CREATE/ERR",
  (s: string) => s
);
