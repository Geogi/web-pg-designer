import {combineReducers} from "redux";
import navigation, {Navigation} from "./navigation";
import database, {Database} from "./database";

export interface Root {
  navigation: Navigation;
  database: Database;
}

const root = combineReducers<Root>({
  navigation,
  database
});

export default root;
