import {Container, createStyles, makeStyles, Theme} from "@material-ui/core";
import * as React from "react";
import {drawerWidth} from "./MDrawer";
import Welcome from "./Welcome";
import Settings from "./Settings";
import {Page} from "../reducers/navigation";
import {useSelector} from "react-redux";
import {RootState} from "../reducers/root";

const useStyles = makeStyles((theme: Theme) => createStyles({
    container: {
        marginTop: theme.spacing(12),
        marginLeft: drawerWidth,
    },
    welcome: {
        display: showPage("welcome"),
    },
    settings: {
        display: showPage("settings"),
    },
}));

const showPage = (destination: Page) => ({page}: Props) => page === destination ? "block" : "none";

interface Props {
    page: Page;
}

const MainView = () => {
    const props: Props = useSelector((state: RootState) => ({
        page: state.navigation.page
    }));
    const classes = useStyles(props);

    return <Container>
        <div className={classes.container}>
            <div className={classes.welcome}><Welcome/></div>
            <div className={classes.settings}><Settings/></div>
        </div>
    </Container>;
};

export default MainView;
