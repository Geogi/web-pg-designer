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
  useMediaQuery, useTheme,
} from "@material-ui/core";
import BrushIcon from "@material-ui/icons/Brush";
import MenuIcon from "@material-ui/icons/Menu";
import {useDispatch} from "react-redux";
import {mobileMenuToggle, navigateSettings} from "../actions/actions";

const useStyles = makeStyles((theme: Theme) => createStyles({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  appIcon: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const MAppBar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const theme = useTheme();
  const smUp = useMediaQuery(theme.breakpoints.up("md"));

  return <AppBar className={classes.appBar}>
    <Toolbar>
      <Hidden mdUp>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={() => dispatch(mobileMenuToggle())}
        >
          <MenuIcon/>
        </IconButton>
      </Hidden>
      <IconButton edge="start" className={classes.appIcon} color="inherit" aria-label="menu">
        <BrushIcon/>
      </IconButton>
      <Typography variant="h6" className={classes.title}>
        {smUp ? "Database Modeler" : "Modeler"}
      </Typography>
      <Button color="inherit" onClick={() => dispatch(navigateSettings())}>Connect</Button>
    </Toolbar>
  </AppBar>;
};

export default MAppBar;
