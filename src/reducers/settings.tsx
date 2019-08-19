import {actions, handle} from "../utils";
import {
  settingsChangeDatabase,
  settingsChangeHost,
  settingsChangePassword,
  settingsChangePort,
  settingsChangeUser
} from "../actions/actions";

export interface Settings {
  host: string;
  port: number;
  database: string;
  user: string;
  password: string;
}

export const defaultPort = 5432;

const init: Settings = {
  host: "localhost",
  port: defaultPort,
  database: "postgres",
  user: "postgres",
  password: "",
};

const settings = actions(
  init,
  handle(settingsChangeHost, (st: Settings, s: string) => ({...st, host: s})),
  handle(settingsChangePort, (st: Settings, n: number) => ({...st, port: n})),
  handle(settingsChangeDatabase, (st: Settings, s: string) => ({...st, database: s})),
  handle(settingsChangeUser, (st: Settings, s: string) => ({...st, user: s})),
  handle(settingsChangePassword, (st: Settings, s: string) => ({...st, password: s})),
);

export default settings;
