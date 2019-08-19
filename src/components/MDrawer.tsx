import {createStyles, Drawer, List, ListItem, ListItemIcon, ListItemText, makeStyles, Theme} from "@material-ui/core";
import * as React from "react";
import SettingsIcon from '@material-ui/icons/Settings';
import {useDispatch} from "react-redux";
import {navigateSettings} from "../actions/actions";

export const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) => createStyles({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        marginTop: theme.spacing(8),
        width: drawerWidth,
    },
}));

const MDrawer = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    return <Drawer variant="permanent" className={classes.drawer} classes={{paper: classes.drawerPaper}}>
        <List>
            <ListItem button key="settings" onClick={() => dispatch(navigateSettings())}>
                <ListItemIcon><SettingsIcon/></ListItemIcon>
                <ListItemText primary="Settings"/>
            </ListItem>
        </List>
    </Drawer>;
};

export default MDrawer;
