import * as React from "react";
import {AppBar, Button, createStyles, IconButton, makeStyles, Theme, Toolbar, Typography} from "@material-ui/core";
import BrushIcon from "@material-ui/icons/Brush";

const useStyles = makeStyles((theme: Theme) => createStyles({
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const MAppBar = () => {
    const classes = useStyles();

    return <AppBar className={classes.appBar}>
        <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <BrushIcon/>
            </IconButton>
            <Typography variant="h6" className={classes.title}>
                Database Modeler
            </Typography>
            <Button color="inherit">Connect</Button>
        </Toolbar>
    </AppBar>;
};

export default MAppBar;
