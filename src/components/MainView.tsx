import {Container, createStyles, makeStyles, Paper, Theme, Typography} from "@material-ui/core";
import * as React from "react";
import {drawerWidth} from "./MDrawer";
import Welcome from "./Welcome";

const useStyles = makeStyles((theme: Theme) => createStyles({
    container: {
        marginTop: theme.spacing(12),
        marginLeft: drawerWidth,
    },
}));

const MainView = () => {
    const classes = useStyles();

    return <Container>
        <div className={classes.container}>
            <Welcome/>
        </div>
    </Container>;
};

export default MainView;
