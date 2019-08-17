import {createAction} from "redux-actions";

const nothing = () => {};

export const navigateSettings = createAction("NAVIGATE/SETTINGS", () => nothing());
