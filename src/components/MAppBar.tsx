import * as React from "react";
import {
  AppBar,
  Button,
  createStyles,
  Hidden,
  IconButton,
  makeStyles,
  Theme,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import BrushIcon from "@material-ui/icons/Brush";
import MenuIcon from "@material-ui/icons/Menu";
import RefreshIcon from "@material-ui/icons/Refresh";
import { useDispatch, useSelector } from "react-redux";
import { mobileMenuToggle, navigatePage } from "../actions/actions";
import { Root } from "../reducers/root";
import { databaseStart, databaseStop } from "../actions/thunks/database";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    appIcon: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    connectionUrl: {
      backgroundColor: theme.palette.primary.dark,
      padding: theme.spacing(1),
      marginLeft: theme.spacing(1),
    },
  })
);

export const MAppBar = () => {
  const connected = useSelector((st: Root) => st.database.connected);
  const dbUser = useSelector((st: Root) => st.database.user);
  const dbHost = useSelector((st: Root) => st.database.host);
  const dbName = useSelector((st: Root) => st.database.database);
  const classes = useStyles();
  const dispatch = useDispatch();
  const theme = useTheme();
  const smUp = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <AppBar className={classes.appBar}>
      <Toolbar>
        <Hidden mdUp>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => dispatch(mobileMenuToggle())}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
        <IconButton
          edge="start"
          className={classes.appIcon}
          color="inherit"
          aria-label="menu"
          onClick={() =>
            connected
              ? dispatch(navigatePage("relations"))
              : dispatch(navigatePage("welcome"))
          }
        >
          <BrushIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          {smUp ? "Database Modeler" : "Modeler"}
        </Typography>
        {connected ? (
          <React.Fragment>
            <IconButton
              edge="end"
              color="inherit"
              aria-label="refresh"
              onClick={() => dispatch(databaseStart(true))}
            >
              <RefreshIcon />
            </IconButton>
            <Hidden smDown>
              <Typography className={classes.connectionUrl}>
                {dbUser}@{dbHost}/{dbName}
              </Typography>
            </Hidden>
            <Button color="inherit" onClick={() => dispatch(databaseStop())}>
              Disconnect
            </Button>
          </React.Fragment>
        ) : (
          <Button
            color="inherit"
            onClick={() => dispatch(navigatePage("settings"))}
          >
            Connect
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};
