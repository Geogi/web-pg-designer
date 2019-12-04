// This works around PersistPartial being private in redux-persist but needed for correct typing.
// Because the type is not part of the public API, it can break without notice!
export interface PersistPartial {
  _persist: any;
}
