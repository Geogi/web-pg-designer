// This works around PersistPartial being private in redux-persist but needed for correct typing.
// Because the type is not part of the public API, it can break without notice!
export interface PersistPartial {
  // need to conform to PersistPartial's definition
  // tslint:disable-next-line:no-any
  _persist: any;
}
