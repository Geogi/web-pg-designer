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
import SettingsIcon from "@material-ui/icons/Settings";
import ViewComfyIcon from "@material-ui/icons/ViewComfy";
import ListAltIcon from "@material-ui/icons/ListAlt";
import SettingsBackupRestoreIcon from "@material-ui/icons/SettingsBackupRestore";
import {useDispatch, useSelector} from "react-redux";
import {
  mobileMenuClose,
  navigateCurrentRelation,
  navigateRelations,
  navigateSettings,
  stateReset
} from "../actions/actions";
import {DrawerProps} from "@material-ui/core/Drawer";
import {Root} from "../reducers/root";

export const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) => createStyles({
  drawer: {
    flexShrink: 0,
  },
  drawerPaper: {
    marginTop: 56,
    [`${theme.breakpoints.up("xs")} and (orientation: "landscape")`]: {
      marginTop: 48,
    },
    [theme.breakpoints.up("sm")]: {
      marginTop: 64,
    },
    width: drawerWidth,
  },
}));

const DrawerBase = (props: DrawerProps) => {
  const connected = useSelector((st: Root) => st.database.connected);
  const page = useSelector((st: Root) => st.navigation.page);
  const relation = useSelector((st: Root) => st.navigation.relation);
  const classes = useStyles();
  const dispatch = useDispatch();

  return <Drawer className={classes.drawer} classes={{paper: classes.drawerPaper}} {...props}>
    <List>
      <ListItem button key="relations" onClick={() => dispatch(navigateRelations())} disabled={!connected}
                selected={page === "relations"}>
        <ListItemIcon><ViewComfyIcon/></ListItemIcon>
        <ListItemText primary="Relations"/>
      </ListItem>
      <ListItem button key="relation" onClick={() => dispatch(navigateCurrentRelation())} disabled={relation === null}
                selected={page === "relation"}>
        <ListItemIcon><ListAltIcon/></ListItemIcon>
        <ListItemText primary="Relation details"/>
      </ListItem>
      <ListItem button key="settings" onClick={() => dispatch(navigateSettings())} selected={page === "settings"}>
        <ListItemIcon><SettingsIcon/></ListItemIcon>
        <ListItemText primary="Settings"/>
      </ListItem>
      <ListItem button key="invalidate" onClick={() => dispatch(stateReset())}>
        <ListItemIcon><SettingsBackupRestoreIcon/></ListItemIcon>
        <ListItemText primary="Invalidate"/>
      </ListItem>
    </List>
  </Drawer>;
};

const MDrawer = () => {
  const mobileIsOpen = useSelector((s: Root) => s.navigation.mobileMenuOpen);
  const dispatch = useDispatch();

  return <React.Fragment>
    <Hidden mdUp>
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
    <Hidden smDown>
      <DrawerBase variant="permanent"/>
    </Hidden>
  </React.Fragment>;
};

export default MDrawer;
