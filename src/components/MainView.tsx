import {Container, createStyles, makeStyles, Theme} from "@material-ui/core";
import * as React from "react";
import {drawerWidth} from "./MDrawer";
import Welcome from "./Welcome";
import Settings from "./Settings";
import {Page} from "../reducers/navigation";
import {useSelector} from "react-redux";
import {Root} from "../reducers/root";

const useStyles = makeStyles((theme: Theme) => createStyles({
  container: {
    marginTop: theme.spacing(12),
    [theme.breakpoints.up('sm')]: {
      marginLeft: drawerWidth,
    },
  },
}));

const MainView = () => {
  const page: Page = useSelector((state: Root) => state.navigation.page);
  const classes = useStyles();

  return <Container>
    <div className={classes.container}>
      {page === "welcome" && <Welcome/>}
      {page === "settings" && <Settings/>}
    </div>
  </Container>;
};

export default MainView;
