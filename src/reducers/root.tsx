import {combineReducers} from "redux";
import navigation, {Navigation} from "./navigation";
import settings, {Settings} from "./settings";

export interface Root {
  navigation: Navigation;
  settings: Settings;
}

const root = combineReducers<Root>({
  navigation,
  settings
});

export default root;
