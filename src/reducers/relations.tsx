import { actions, handle } from "../utils/actionReduce";
import {
  relationsCreateErr,
  relationsCreateName,
  relationsCreateShow,
  relationsDropShow,
  stateReset,
} from "../actions/actions";

export interface Relations {
  createShow: boolean;
  createName: string;
  createErr: string;
  dropShow: boolean;
  dropName: string;
  dropErr: string;
}

const init: Relations = {
  createShow: false,
  createName: "",
  createErr: "",
  dropShow: false,
  dropName: "",
  dropErr: "",
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
  })),
  handle(relationsDropShow, (st: Relations, [dropShow, dropName]) => ({
    ...st,
    dropShow,
    dropName,
  }))
);
