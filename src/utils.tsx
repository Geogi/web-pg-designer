import reduceReducer from "reduce-reducers";
import {handleAction, handleActions} from "redux-actions";
import {Reducer} from "redux";

export const reduceActions = <T extends {}>(
    initialState: T,

) => reduceReducer(
    initialState,
    handleAction(ac1, cl1, initialState),
    handleAction(ac2, cl2, initialState),
) as Reducer<T>;
