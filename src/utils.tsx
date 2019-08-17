import {Action, Reducer} from "redux";

type VoidActionMaker = (() => Action<string>) & {
    type: string
};
type PayloadActionMaker<T, P> = ((a: T) => Action<string> & {
    payload: P
}) & {
    type: string
};
type ActionMaker<T, P> = VoidActionMaker | PayloadActionMaker<T, P>;

export function createAction<T, P>(type: string): VoidActionMaker;
export function createAction<T, P>(type: string, payloadMaker: (arg: T) => P): PayloadActionMaker<T, P>;
export function createAction<T, P>(type: string, payloadMaker?: (arg: T) => P): ActionMaker<T, P> {
    if (payloadMaker === undefined) {
        return Object.assign(() => ({type}), {type});
    } else {
        return Object.assign((arg: T) => ({type, payload: payloadMaker(arg)}), {type});
    }
}

type Handler<S, P> =
    [VoidActionMaker, (state: S) => S] |
    [PayloadActionMaker<unknown, P>, (state: S, payload?: P) => S]
export function handleActions<S, P>(initialState: S, ...actions: Handler<S, P>[]): Reducer<S> {
    return (previousState: S | undefined, action: Action<string> & { payload?: P }) => {
        return actions
            .filter(([maker,]) => maker.type === action.type)
            .reduce((s, [, reducer]) => {
                if (action.payload === undefined) {
                    return reducer(s || initialState)
                } else {
                    return reducer(s || initialState, action.payload)
                }
            }, previousState) || initialState;
    }
}
