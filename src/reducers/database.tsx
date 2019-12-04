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

export interface Database {
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

const init: Database = {
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

const database = actions(
  init,
  handle(stateReset, () => init),
  handle(settingsChangeHost, (st: Database, s: string) => ({...st, fieldHost: s})),
  handle(settingsChangePort, (st: Database, n: number) => ({...st, fieldPort: n})),
  handle(settingsChangeDatabase, (st: Database, s: string) => ({...st, fieldDatabase: s})),
  handle(settingsChangeUser, (st: Database, s: string) => ({...st, fieldUser: s})),
  handle(settingsChangePassword, (st: Database, s: string) => ({...st, fieldPassword: s})),
  handle(databasePool, (st: Database): Database => {
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
  handle(databaseOk, (st: Database, [msg, tables]: [string, Table[]]): Database => ({
    ...st,
    connected: true,
    testResult: msg,
    tables
  })),
  handle(databaseErr, (st: Database, err: string): Database => ({...st, connected: false, testResult: err})),
  handle(databaseEnd, (st: Database): Database => ({...st, pool: null, connected: null})),
);

export default database;
