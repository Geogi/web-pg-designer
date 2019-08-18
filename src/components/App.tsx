import * as React from "react";
import {CssBaseline} from "@material-ui/core";
import MDrawer from "./MDrawer";
import MainView from "./MainView";
import MAppBar from "./MAppBar";

const App = () => <React.Fragment>
    <CssBaseline/>
    <MAppBar/>
    <MDrawer/>
    <MainView/>
</React.Fragment>;

export default App;
