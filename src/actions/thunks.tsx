import {Root} from "../reducers/root";
import {databaseErr, databaseOk, databasePool} from "./actions";
import {Pool} from "pg";

export const databaseSetup = () => (dispatch: Function) => {
  dispatch(databasePool());
  dispatch(databaseTry());
};

const databaseTryAsync = async (pool: Pool) => {
  const client = await pool.connect();
  const version: string = (await client.query("SELECT VERSION()")).rows[0].version;
  client.release();
  return version;
};
export const databaseTry = () => (dispatch: Function, getState: () => Root) => {
  const pool = getState().database.pool;
  if (pool === null) {
    dispatch(databaseErr("Could not set up the pool."));
    return;
  }
  databaseTryAsync(pool)
    .then((version: string) => dispatch(databaseOk(version)))
    .catch((err: any) => dispatch(databaseErr(err.toString())));
};
