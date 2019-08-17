import * as React from "react";
import {AppBar, Button, createStyles, IconButton, makeStyles, Theme, Toolbar, Typography} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
    })
);

const MAppBar = () => {
    const classes = useStyles();

    return <React.Fragment>
        <AppBar>
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon/>
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    Modeler
                </Typography>
                <Button color="inherit">Connect</Button>
            </Toolbar>
        </AppBar>
        <Toolbar/>
    </React.Fragment>;
};

export default MAppBar;
