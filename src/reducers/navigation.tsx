import {actions, handle} from "../utils/actionReduce";
import {
  databaseEnd,
  databaseErr,
  mobileMenuClose,
  mobileMenuToggle,
  navigatePage,
  navigateRelation,
  stateReset
} from "../actions/actions";

export type Page = "welcome" | "settings" | "relations" | "relation";

export interface Navigation {
  mobileMenuOpen: boolean;
  page: Page;
  relation: string | null;
}

const init: Navigation = {
  mobileMenuOpen: false,
  page: "welcome",
  relation: null,
};

const navigation = actions(
  init,
  handle(stateReset, () => init),
  handle(mobileMenuToggle, (st: Navigation) => ({...st, mobileMenuOpen: !st.mobileMenuOpen})),
  handle(mobileMenuClose, (st: Navigation): Navigation => ({...st, mobileMenuOpen: false})),
  handle(navigatePage, (st: Navigation, page: Page): Navigation => ({...st, page, mobileMenuOpen: false})),
  handle(navigateRelation, (st: Navigation, relation: string): Navigation =>
    ({...st, page: "relation", relation, mobileMenuOpen: false})),
  handle(databaseEnd, (st: Navigation): Navigation => ({...st, page: "settings"})),
  handle(databaseErr, (st: Navigation): Navigation => ({...st, page: "settings"})),
);

export default navigation;
