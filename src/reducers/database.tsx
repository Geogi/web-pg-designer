import {actions, handle} from "../actionReduce";
import {
  databaseErr,
  databaseOk,
  settingsChangeDatabase,
  settingsChangeHost,
  settingsChangePassword,
  settingsChangePort,
  settingsChangeUser
} from "../actions/actions";
import {Pool} from "pg";
import {databaseSetup} from "../actions/thunks";

export interface Database {
  host: string;
  port: number;
  database: string;
  user: string;
  password: string;
  pool: Pool | null;
  testResult: boolean | null;
  testMsg: string;
}

export const defaultPort = 5432;

const init: Database = {
  host: "localhost",
  port: defaultPort,
  database: "postgres",
  user: "postgres",
  password: "",
  pool: null,
  testResult: null,
  testMsg: "",
};

const database = actions(
  init,
  handle(settingsChangeHost, (st: Database, s: string) => ({...st, host: s})),
  handle(settingsChangePort, (st: Database, n: number) => ({...st, port: n})),
  handle(settingsChangeDatabase, (st: Database, s: string) => ({...st, database: s})),
  handle(settingsChangeUser, (st: Database, s: string) => ({...st, user: s})),
  handle(settingsChangePassword, (st: Database, s: string) => ({...st, password: s})),
  handle(databaseSetup, (st: Database): Database => ({
    ...st, pool: new Pool({
      host: st.host,
      port: st.port,
      user: st.user,
      password: st.password,
    }),
  })),
  handle(databaseOk, (st: Database, msg: string): Database => ({...st, testResult: true, testMsg: msg})),
  handle(databaseErr, (st: Database, err: string): Database => ({...st, testResult: false, testMsg: err})),
);

export default database;
