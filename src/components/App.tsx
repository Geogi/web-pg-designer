import * as React from "react";
import {CssBaseline} from "@material-ui/core";
import MDrawer from "./MDrawer";
import MainViewCont from "../containers/MainViewCont";
import MAppBarCont from "../containers/MAppBarCont";

const App = () => <React.Fragment>
    <CssBaseline/>
    <MAppBarCont/>
    <MDrawer/>
    <MainViewCont/>
</React.Fragment>;

export default App;
