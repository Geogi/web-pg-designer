import {Action, Reducer} from "redux";

interface PayloadAction<P> extends Action<string> {
  payload: P;
}

interface MaybePayloadAction<P> extends Action<string> {
  payload?: P;
}

type VoidCommand = (() => Action<string>) & {
  kind: "void",
  type: string,
}
type PayloadCommand<T, P> = ((a: T) => PayloadAction<P>) & {
  kind: "payload",
  type: string,
}
type Command<T, P> = VoidCommand | PayloadCommand<T, P>;

export function createAction<T, P>(type: string): VoidCommand;
export function createAction<T, P>(type: string, payloadFn: (arg: T) => P): PayloadCommand<T, P>;
export function createAction<T, P>(type: string, payloadFn?: (arg: T) => P): Command<T, P> {
  if (payloadFn === undefined) {
    return Object.assign(() => ({type}), {type, kind: "void" as const});
  } else {
    return Object.assign((arg: T) => ({type, payload: payloadFn(arg)}), {type, kind: "payload" as const});
  }
}

interface DefinedActionReducer<S> {
  type: string;
  reducer: (s: S, p: any) => S | undefined;
}

export function actions<S>(initialState: S, ...dar: DefinedActionReducer<S>[]): Reducer<S> {
  return (previousState: S | undefined, action: MaybePayloadAction<any>) =>
    dar
      .filter(({type}) => type === action.type)
      .reduce((s, {reducer}) =>
          reducer(s || initialState, action.payload),
        previousState)
    || initialState
}

export function handle<S, P>(maker: VoidCommand, handler: (s: S) => S): DefinedActionReducer<S>;
export function handle<S, P>(
  maker: PayloadCommand<any, P>,
  handler: (s: S, p: P) => S):
  DefinedActionReducer<S>;
export function handle<S, P>(maker: Command<S, P>, handler: Function): DefinedActionReducer<S> {
  return {
    type: maker.type,
    reducer: (s: S, p: any) => {
      if (maker.kind === "void") {
        return handler(s);
      } else {
        return handler(s, p);
      }
    }
  }
}
