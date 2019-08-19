import {createStyles, Link, makeStyles, Paper, Theme, Typography} from "@material-ui/core";
import * as React from "react";
import {useDispatch} from "react-redux";
import {navigateSettings} from "../actions/actions";

const useStyles = makeStyles((theme: Theme) => createStyles({
    paper: {
        flexGrow: 1,
        padding: theme.spacing(2),
        margin: theme.spacing(4, 0),
    },
}));

const Welcome = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    return <Paper className={classes.paper}>
        <Typography variant="h5">Welcome</Typography>
        <Typography variant="body1">
            <Link onClick={() => dispatch(navigateSettings())}>Connect</Link>
            {' '}to a database to start modeling.
        </Typography>
    </Paper>;
};

export default Welcome;
