import { Root } from "../reducers/root";

export const getPool = (state: Root) => {
  const pool = state.database.pool;
  if (pool === null) {
    throw new Error("Lost connection pool; try reconnecting.");
  }
  return pool;
};
