import {actions, handle} from "../utils";
import {mobileMenuClose, mobileMenuToggle, navigateSettings} from "../actions/actions";

export type Page = "welcome" | "settings";

export interface Navigation {
  mobileMenuOpen: boolean;
  page: Page;
}

const initialNavigationState: Navigation = {
  mobileMenuOpen: false,
  page: "welcome",
};

const navigation = actions(
  initialNavigationState,
  handle(mobileMenuToggle, (s: Navigation) => ({...s, mobileMenuOpen: !s.mobileMenuOpen})),
  handle(mobileMenuClose, (s: Navigation) => ({...s, mobileMenuOpen: false})),
  handle(navigateSettings, (s: Navigation) => ({...s, page: "settings"})),
);

export default navigation;
