import {actions, handle} from "../utils";
import {navigateSettings} from "../actions/actions";

export type Page = "welcome" | "settings";

export interface NavigationState {
    page: Page;
}

const initialNavigationState: NavigationState = {
    page: "welcome",
};

const navigation = actions(
    initialNavigationState,
    handle(navigateSettings, (s: NavigationState) => ({...s, page: "settings" as const})),
);

export default navigation;
