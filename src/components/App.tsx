import * as React from "react";
import {CssBaseline} from "@material-ui/core";
import MAppBar from "./MAppBar";
import MDrawer from "./MDrawer";
import MainView from "./MainView";

const App = () => <React.Fragment>
    <CssBaseline/>
    <MAppBar/>
    <MDrawer/>
    <MainView/>
</React.Fragment>;

export default App;
