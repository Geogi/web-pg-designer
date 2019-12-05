import { actions, handle } from "../utils/actionReduce";
import {
  relationsCreateErr,
  relationsCreateName,
  relationsCreateShow,
  stateReset,
} from "../actions/actions";

export interface Relations {
  createShow: boolean;
  createName: string;
  createErr: string;
}

const init: Relations = {
  createShow: false,
  createName: "",
  createErr: "",
};

export const relations = actions(
  init,
  handle(stateReset, () => init),
  handle(relationsCreateShow, (st: Relations, createShow: boolean) => ({
    ...st,
    createShow,
  })),
  handle(relationsCreateName, (st: Relations, createName: string) => ({
    ...st,
    createName,
  })),
  handle(relationsCreateErr, (st: Relations, createErr: string) => ({
    ...st,
    createErr,
  }))
);
