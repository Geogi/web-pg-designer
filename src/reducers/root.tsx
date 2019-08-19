import {combineReducers} from "redux";
import navigation, {Navigation} from "./navigation";

export interface Root {
  navigation: Navigation;
}

const root = combineReducers<Root>({
  navigation
});

export default root;
