import {Root} from "../../reducers/root";
import {relationsAddClose, relationsAddErr} from "../actions";
import {createTable} from "../../utils/queries/createTable";

export const relationsAddSubmit = () => async (dispatch: Function, getState: () => Root) => {
  const pool = getState().database.pool;
  if (pool === null) {
    dispatch(relationsAddErr("Lost connection pool; try reconnecting."));
    return;
  }
  try {
    await pool.query(createTable(getState().relations.newRelName));
    dispatch(relationsAddErr(""));
    dispatch(relationsAddClose());
  } catch (err) {
    dispatch(relationsAddErr(err.toString()));
  }
};
