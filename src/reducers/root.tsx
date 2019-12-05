import {combineReducers} from "redux";
import {navigation, Navigation} from "./navigation";
import {database, Database} from "./database";
import storage from "redux-persist/lib/storage";
import {PersistPartial} from "../utils/persist";
import {persistReducer} from "redux-persist";
import {relations, Relations} from "./relations";

interface RootPure {
  navigation: Navigation;
  database: Database;
  relations: Relations;
}

const rootPure = combineReducers<RootPure>({
  navigation,
  database,
  relations,
});

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["database"],
};

export type Root = RootPure & PersistPartial;

export const root = persistReducer(persistConfig, rootPure);
