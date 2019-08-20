import * as React from "react";
import * as ReactDOM from "react-dom";
import thunk from "redux-thunk";
import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {Provider} from "react-redux";
import root from "./reducers/root";
import "typeface-roboto";
import App from "./components/App";

const store = createStore(
  root,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById("root")
);
