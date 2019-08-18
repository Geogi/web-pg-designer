import {createStyles, makeStyles, Paper, Theme, Typography} from "@material-ui/core";
import * as React from "react";

const useStyles = makeStyles((theme: Theme) => createStyles({
    paper: {
        flexGrow: 1,
        padding: theme.spacing(2),
        margin: theme.spacing(4, 0),
    },
}));

const Settings = () => {
    const classes = useStyles();

    return <Paper className={classes.paper}>
        <Typography variant="h5">Settings</Typography>
        <Typography variant="body1">Blablabla.</Typography>
    </Paper>;
};

export default Settings;
