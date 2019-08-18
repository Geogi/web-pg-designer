import {combineReducers} from "redux";
import navigation, {NavigationState} from "./navigation";

export interface RootState {
    navigation: NavigationState;
}

const root = combineReducers<RootState>({
    navigation
});

export default root;
