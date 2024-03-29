import {
  Box,
  Container,
  createStyles,
  makeStyles,
  Theme,
} from "@material-ui/core";
import * as React from "react";
import { drawerWidth } from "./MDrawer";
import { Welcome } from "./Welcome";
import { Settings } from "./Settings";
import { Page } from "../reducers/navigation";
import { useSelector } from "react-redux";
import { Root } from "../reducers/root";
import { Relations } from "./Relations";
import { Relation } from "./Relation";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      marginTop: theme.spacing(12),
      [theme.breakpoints.up("md")]: {
        marginLeft: drawerWidth,
      },
    },
  })
);

export const MainView = () => {
  const page: Page = useSelector((state: Root) => state.navigation.page);
  const classes = useStyles();

  return (
    <Container>
      <Box className={classes.container}>
        {page === "welcome" && <Welcome />}
        {page === "settings" && <Settings />}
        {page === "relations" && <Relations />}
        {page === "relation" && <Relation />}
      </Box>
    </Container>
  );
};
