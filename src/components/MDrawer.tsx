import {
  createStyles,
  Drawer,
  Hidden,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Theme
} from "@material-ui/core";
import * as React from "react";
import SettingsIcon from '@material-ui/icons/Settings';
import {useDispatch, useSelector} from "react-redux";
import {mobileMenuClose, navigateSettings} from "../actions/actions";
import {DrawerProps} from "@material-ui/core/Drawer";
import {Root} from "../reducers/root";

export const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) => createStyles({
  drawer: {
    flexShrink: 0,
  },
  drawerPaper: {
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(8),
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: theme.spacing(7),
    },
    width: drawerWidth,
  },
}));

const DrawerBase = (props: DrawerProps) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return <Drawer className={classes.drawer} classes={{paper: classes.drawerPaper}} {...props}>
    <List>
      <ListItem button key="settings" onClick={() => dispatch(navigateSettings())}>
        <ListItemIcon><SettingsIcon/></ListItemIcon>
        <ListItemText primary="Settings"/>
      </ListItem>
    </List>
  </Drawer>;
};

const MDrawer = () => {
  const mobileIsOpen = useSelector((s: Root) => s.navigation.mobileMenuOpen);
  const dispatch = useDispatch();

  return <React.Fragment>
    <Hidden smUp>
      <DrawerBase
        variant="temporary"
        open={mobileIsOpen}
        onClose={() => dispatch(mobileMenuClose())}
        ModalProps={{
          BackdropProps: {
            invisible: true
          }
        }}
      />
    </Hidden>
    <Hidden xsDown>
      <DrawerBase variant="permanent"/>
    </Hidden>
  </React.Fragment>;
};

export default MDrawer;
