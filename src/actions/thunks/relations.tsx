import {Root} from "../../reducers/root";
import {relationsCreateErr, relationsCreateShow} from "../actions";
import {createTable} from "../../utils/queries/createTable";

export const relationsCreateSubmit = () => async (
  dispatch: Function,
  getState: () => Root
) => {
  const pool = getState().database.pool;
  if (pool === null) {
    dispatch(relationsCreateErr("Lost connection pool; try reconnecting."));
    return;
  }
  try {
    await pool.query(createTable(getState().relations.createName));
    dispatch(relationsCreateErr(""));
    dispatch(relationsCreateShow(false));
  } catch (err) {
    dispatch(relationsCreateErr(err.toString()));
  }
};
