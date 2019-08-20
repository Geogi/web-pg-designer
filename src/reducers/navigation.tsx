import {actions, handle} from "../utils/actionReduce";
import {mobileMenuClose, mobileMenuToggle, navigateSettings} from "../actions/actions";

export type Page = "welcome" | "settings";

export interface Navigation {
  mobileMenuOpen: boolean;
  page: Page;
}

const init: Navigation = {
  mobileMenuOpen: false,
  page: "welcome",
};

const navigation = actions(
  init,
  handle(mobileMenuToggle, (st: Navigation) => ({...st, mobileMenuOpen: !st.mobileMenuOpen})),
  handle(mobileMenuClose, (st: Navigation): Navigation => ({...st, mobileMenuOpen: false})),
  handle(navigateSettings, (st: Navigation): Navigation => ({...st, page: "settings"})),
);

export default navigation;
