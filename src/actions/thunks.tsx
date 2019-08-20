import {createAction} from "../utils/actionReduce";
import {Root} from "../reducers/root";
import {databaseErr, databaseOk} from "./actions";
import {Pool} from "pg";

export const databaseSetup = createAction("DATABASE/SETUP",
  () => (dispatch: Function) =>
    dispatch(databaseTry())
);

const databaseTryAsync = async (pool: Pool) => {
  const client = await pool.connect();
  const version: string = (await client.query("SELECT VERSION()")).rows[0];
  client.release();
  return version;
};
export const databaseTry = createAction("DATABASE/TRY",
  () => async (dispatch: Function, getState: () => Root) => {
    const pool = getState().database.pool;
    if (pool === null) {
      dispatch(databaseErr("Could not set up the pool."));
      return;
    }
    databaseTryAsync(pool)
      .then((version: string) => dispatch(databaseOk(version)))
      .catch((err: string) => dispatch(databaseErr(err)));
  }
);
