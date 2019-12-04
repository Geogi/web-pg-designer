import * as React from "react";
import * as ReactDOM from "react-dom";
import thunk from "redux-thunk";
import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {Provider} from "react-redux";
import "typeface-roboto";
import {PersistGate} from "redux-persist/integration/react";
import {persistReducer, persistStore} from "redux-persist";
import storage from "redux-persist/lib/storage";

import root from "./reducers/root";
import App from "./components/App";

const persistConfig = {
  key: 'root',
  storage,
};

const store = createStore(
  persistReducer(persistConfig, root),
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);

const persist = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persist}>
      <App/>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
