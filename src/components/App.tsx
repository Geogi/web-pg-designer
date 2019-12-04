import * as React from "react";
import {useEffect} from "react";
import {CssBaseline} from "@material-ui/core";
import MDrawer from "./MDrawer";
import MainView from "./MainView";
import MAppBar from "./MAppBar";
import {useDispatch, useSelector} from "react-redux";
import {Root} from "../reducers/root";
import setup from "../utils/setup";

const App = () => {
  const dispatch = useDispatch();
  const root = useSelector((st: Root) => st);
  useEffect(() => setup(dispatch, root), []);

  return <React.Fragment>
    <CssBaseline/>
    <MAppBar/>
    <MDrawer/>
    <MainView/>
  </React.Fragment>;
};

export default App;
