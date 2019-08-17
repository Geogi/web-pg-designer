import {handleActions} from "../utils";
import {navigatePage, navigateSettings} from "../actions/actions";

export interface NavigationState {
    page: number;
}

const initialNavigationState: NavigationState = {
    page: 0,
};

const navigation = handleActions(
    initialNavigationState,
    [navigateSettings, (s: NavigationState) => ({...s, page: 1})],
    [navigatePage, (s: NavigationState, p: number) => ({...s, page: p})]
);

export default navigation;
