import * as React from "react";
import {createStyles, Fab, makeStyles, Theme} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import {RelGrid} from "./RelGrid";
import {RelAddDialog} from "./RelAddDialog";
import {useDispatch} from "react-redux";
import {relationsCreateShow} from "../../actions/actions";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    fab: {
      position: "absolute",
      bottom: theme.spacing(4),
      right: theme.spacing(4),
    },
  })
);

export const Relations = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <React.Fragment>
      <RelGrid/>
      <Fab color="primary" aria-label="add" className={classes.fab}>
        <AddIcon onClick={() => dispatch(relationsCreateShow(true))}/>
      </Fab>
      <RelAddDialog/>
    </React.Fragment>
  );
};