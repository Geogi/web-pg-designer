import reduceReducer from "reduce-reducers";
import {handleAction, handleActions} from "redux-actions";
import {navigateSettings} from "../actions/actions";
import {AnyAction, Reducer} from "redux";

export interface NavigationState {
    page: "settings" | "welcome";
}

const initialNavigationState: NavigationState = {
    page: "welcome",
};

const navigation = handleActions(
    // {
    //     A: (state) => ({...state, page: "settings" } as NavigationState),
    // },
    // initialNavigationState
    // handleAction(navigateSettings, (state) => ({
    //     ...state,
    //     page: "settings",
    // }), initialNavigationState),
);

export default navigation;
