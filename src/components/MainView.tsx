import {Container, createStyles, makeStyles, Theme} from "@material-ui/core";
import * as React from "react";
import {drawerWidth} from "./MDrawer";
import Welcome from "./Welcome";
import Settings from "./Settings";
import {Page} from "../reducers/navigation";

const useStyles = makeStyles((theme: Theme) => createStyles({
    container: {
        marginTop: theme.spacing(12),
        marginLeft: drawerWidth,
    },
    welcome: {
        display: selectPage("welcome"),
    },
    settings: {
        display: selectPage("settings"),
    },
}));

const selectPage = (page: Page) => (props: MainViewState) => props.page === page ? "block" : "none";

export interface MainViewState {
    page: Page;
}

export interface MainViewProps extends MainViewState {}

const MainView = (props: MainViewProps) => {
    const classes = useStyles(props);

    return <Container>
        <div className={classes.container}>
            <div className={classes.welcome}><Welcome/></div>
            <div className={classes.settings}><Settings/></div>
        </div>
    </Container>;
};

export default MainView;
