import { Root } from "../../reducers/root";
import {
  relationsCreateErr,
  relationsCreateShow,
  relationsDropErr,
  relationsDropShow,
} from "../actions";
import { createTable } from "../../utils/queries/createTable";
import { getPool } from "../../utils/database";
import { dropTable } from "../../utils/queries";

export const relationsCreateSubmit = () => async (
  dispatch: Function,
  getState: () => Root
) => {
  try {
    const pool = getPool(getState());
    await pool.query(createTable(getState().relations.createName));
    dispatch(relationsCreateShow(false));
    dispatch(relationsCreateErr(""));
  } catch (err) {
    dispatch(relationsCreateErr(err.toString()));
  }
};

export const relationsDropSubmit = () => async (
  dispatch: Function,
  getState: () => Root
) => {
  try {
    const pool = getPool(getState());
    await pool.query(dropTable(getState().relations.dropName));
    dispatch(relationsDropShow([false, ""]));
    dispatch(relationsDropErr(""));
  } catch (err) {
    dispatch(relationsDropErr(err.toString()));
  }
};
