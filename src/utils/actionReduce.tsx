import {Action, Reducer} from "redux";

interface PayloadAction<P> extends Action<string> {
  payload: P;
}

interface UnknownAction<P> extends Action<string> {
  payload?: P;
}

type NudeBuilder = (() => Action<string>) & {
  kind: "nude";
  type: string;
};
type ThunkBuilder<P> = (() => PayloadAction<P>) & {
  kind: "thunk";
  type: string;
};
type FunctionBuilder<T, P> = ((a: T) => PayloadAction<P>) & {
  kind: "function";
  type: string;
};
type Builder<T, P> = NudeBuilder | ThunkBuilder<P> | FunctionBuilder<T, P>;

export function createAction<T, P>(type: string): NudeBuilder;
export function createAction<T, P>(
  type: string,
  payloadFn: () => P
): ThunkBuilder<P>;
export function createAction<T, P>(
  type: string,
  payloadFn: (arg: T) => P
): FunctionBuilder<T, P>;
export function createAction<T, P>(
  type: string,
  payloadFn?: Function
): Builder<T, P> {
  if (payloadFn === undefined) {
    return Object.assign(() => ({type}), {type, kind: "nude" as const});
  } else if (payloadFn.length === 0) {
    return Object.assign(() => ({type, payload: payloadFn()}), {
      type,
      kind: "thunk" as const,
    });
  } else {
    return Object.assign((arg: T) => ({type, payload: payloadFn(arg)}), {
      type,
      kind: "function" as const,
    });
  }
}

// actions/handle make heavy use of the any type
// maybe it could be written in a type-safe way, if so fix and remove any
/* tslint:disable:no-any */

interface DefinedActionReducer<S> {
  type: string;
  reducer: (s: S, p: any) => S | undefined;
}

export function actions<S>(
  initialState: S,
  ...dar: Array<DefinedActionReducer<S>>
): Reducer<S> {
  return (previousState: S | undefined, action: UnknownAction<any>) =>
    dar
      .filter(({type}) => type === action.type)
      .reduce(
        (s, {reducer}) => reducer(s || initialState, action.payload),
        previousState
      ) || initialState;
}

export function handle<S, P>(
  maker: NudeBuilder,
  handler: (s: S) => S
): DefinedActionReducer<S>;
export function handle<S, P>(
  maker: ThunkBuilder<P>,
  handler: (s: S) => S
): DefinedActionReducer<S>;
export function handle<S, P>(
  maker: FunctionBuilder<any, P>,
  handler: (s: S, p: P) => S
): DefinedActionReducer<S>;
export function handle<S, P>(
  maker: Builder<S, P>,
  handler: Function
): DefinedActionReducer<S> {
  return {
    type: maker.type,
    reducer: (s: S, p: any) => {
      if (maker.kind === "nude") {
        return handler(s);
      } else {
        return handler(s, p);
      }
    },
  };
}
