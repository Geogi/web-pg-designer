import {Root} from "../reducers/root";
import {Database} from "../reducers/database";
import {databaseStart} from "../actions/thunks/database";

const setup = (dispatch: Function, st: Root) => {
  tryReconnect(dispatch, st.database);
};

export default setup;

const tryReconnect = (dispatch: Function, {connected}: Database) => {
  if (connected) {
    dispatch(databaseStart(true))
  }
};
