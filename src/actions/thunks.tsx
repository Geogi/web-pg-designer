import {Root} from "../reducers/root";
import {databaseEnd, databaseErr, databaseOk, databasePool, navigateRelations} from "./actions";
import {countRows, selectVersion, showTables} from "../utils/queries";
import {Table} from "../reducers/database";
import {showPrimaryKeys} from "../utils/queries/showPrimaryKeys";
import {showColumns} from "../utils/queries/showColumns";

const endPool = async (state: Root) => {
  if (state.database.pool !== null) {
    await state.database.pool.end();
  }
};

export const databaseStart = () => async (dispatch: Function, getState: () => Root) => {
  await endPool(getState());
  dispatch(databasePool());
  const pool = getState().database.pool;
  if (pool === null) {
    dispatch(databaseErr("Could not set up the pool."));
    return;
  }
  try {
    const client = await pool.connect();
    const version: string = (await client.query(selectVersion)).rows[0].version;
    const tableNames = (await client.query(showTables)).rows.map((res: any) => res.table_name);
    const tables: Table[] = await Promise.all(tableNames.map(async (name: string) => {
      const primaryKeys = (await client.query(showPrimaryKeys(name))).rows.map((res: any) => res.column_name);
      return ({
        name,
        cols: (await client.query(showColumns(name))).rows.map((res: any) => ({
          name: res.column_name,
          type: res.data_type,
          nullable: res.is_nullable === "YES",
          primaryKey: primaryKeys.includes(res.column_name),
          references: null,
        })),
        rowCount: (await client.query(countRows(name))).rows[0].count,
        sample: [],
      });
    }));
    client.release();
    dispatch(databaseOk([version, tables]));
    dispatch(navigateRelations())
  } catch(err) {
    dispatch(databaseErr(err.toString()));
  }
};

export const databaseStop = () => async (dispatch: Function, getState: () => Root) => {
  await endPool(getState());
  dispatch(databaseEnd())
};
