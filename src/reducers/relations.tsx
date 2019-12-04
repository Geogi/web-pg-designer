import {actions, handle} from "../utils/actionReduce";
import {
  relationsAddChangeName,
  relationsAddClose,
  relationsAddErr,
  relationsAddOpen,
  stateReset
} from "../actions/actions";

export interface Relations {
  showAddDialog: boolean;
  newRelName: string;
  newRelError: string;
}

const init: Relations = {
  showAddDialog: false,
  newRelName: "",
  newRelError: "",
};

const relations = actions(
  init,
  handle(stateReset, () => init),
  handle(relationsAddOpen, (st: Relations) => ({...st, showAddDialog: true})),
  handle(relationsAddClose, (st: Relations) => ({...st, showAddDialog: false})),
  handle(relationsAddChangeName, (st: Relations, newRelName: string) => ({...st, newRelName})),
  handle(relationsAddErr, (st: Relations, newRelError: string) => ({...st, newRelError})),
);

export default relations;
