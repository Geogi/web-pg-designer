import storage from "redux-persist/lib/storage"

import {actions, handle} from "../utils/actionReduce";
import {
  databaseEnd,
  databaseErr,
  databaseOk,
  databasePool,
  settingsChangeDatabase,
  settingsChangeHost,
  settingsChangePassword,
  settingsChangePort,
  settingsChangeUser,
  stateReset
} from "../actions/actions";
import {Pool} from "pg";
import {persistReducer} from "redux-persist";
import {PersistPartial} from "../utils/persist";

interface DatabasePure {
  fieldHost: string;
  fieldPort: number;
  fieldDatabase: string;
  fieldUser: string;
  fieldPassword: string;
  host: string;
  port: number;
  database: string;
  user: string;
  password: string;
  pool: Pool | null;
  connected: boolean | null;
  testResult: string;
  tables: Table[];
}

export interface Table {
  name: string;
  cols: Column[];
  rowCount: number;
  sample: Row[];
}

export interface Column {
  name: string;
  type: string;
  nullable: boolean;
  primaryKey: boolean;
  references: Column | null;
}

export interface Row {
  values: string[];
}

export const defaultPort = 5432;

const init: DatabasePure = {
  fieldHost: "localhost",
  fieldPort: defaultPort,
  fieldDatabase: "postgres",
  fieldUser: "postgres",
  fieldPassword: "",
  host: "",
  port: 0,
  database: "",
  user: "",
  password: "",
  pool: null,
  connected: null,
  testResult: "",
  tables: [],
};

const databasePure = actions(
  init,
  handle(stateReset, () => init),
  handle(settingsChangeHost, (st: DatabasePure, s: string) => ({...st, fieldHost: s})),
  handle(settingsChangePort, (st: DatabasePure, n: number) => ({...st, fieldPort: n})),
  handle(settingsChangeDatabase, (st: DatabasePure, s: string) => ({...st, fieldDatabase: s})),
  handle(settingsChangeUser, (st: DatabasePure, s: string) => ({...st, fieldUser: s})),
  handle(settingsChangePassword, (st: DatabasePure, s: string) => ({...st, fieldPassword: s})),
  handle(databasePool, (st: DatabasePure): DatabasePure => {
    const host = st.fieldHost;
    const port = st.fieldPort;
    const database = st.fieldDatabase;
    const user = st.fieldUser;
    const password = st.fieldPassword;
    return {
      ...st, host, port, database, user, password,
      pool: new Pool({host, port, database, user, password,}),
      connected: null,
    };
  }),
  handle(databaseOk, (st: DatabasePure, [msg, tables]: [string, Table[]]): DatabasePure => ({
    ...st,
    connected: true,
    testResult: msg,
    tables
  })),
  handle(databaseErr, (st: DatabasePure, err: string): DatabasePure => ({...st, connected: false, testResult: err})),
  handle(databaseEnd, (st: DatabasePure): DatabasePure => ({...st, pool: null, connected: null})),
);

export type Database = DatabasePure & PersistPartial;

const persistConfig = {
  key: "database",
  storage: storage,
  blacklist: [
    "pool",
  ]
};

const database = persistReducer(persistConfig, databasePure);

export default database;
