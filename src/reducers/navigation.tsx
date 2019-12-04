import {actions, handle} from "../utils/actionReduce";
import {
  databaseEnd,
  databaseErr,
  mobileMenuClose,
  mobileMenuToggle,
  navigateCurrentRelation,
  navigateRelation,
  navigateRelations,
  navigateSettings,
  navigateWelcome,
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
  handle(navigateSettings, (st: Navigation): Navigation => ({...st, page: "settings", mobileMenuOpen: false})),
  handle(navigateWelcome, (st: Navigation): Navigation => ({...st, page: "welcome"})),
  handle(navigateRelations, (st: Navigation): Navigation =>
    ({...st, page: "relations", mobileMenuOpen: false})),
  handle(navigateRelation, (st: Navigation, relation: string): Navigation =>
    ({...st, page: "relation", relation})),
  handle(navigateCurrentRelation, (st: Navigation): Navigation =>
    ({...st, page: "relation", mobileMenuOpen: false})),
  handle(databaseEnd, (st: Navigation): Navigation => ({...st, page: "settings"})),
  handle(databaseErr, (st: Navigation): Navigation => ({...st, page: "settings"})),
);

export default navigation;
