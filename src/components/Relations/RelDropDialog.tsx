import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@material-ui/core";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Root } from "../../reducers/root";
import { relationsDropShow } from "../../actions/actions";
import { relationsDropSubmit } from "../../actions/thunks/relations";
import ErrorIcon from "@material-ui/icons/Error";

export const RelDropDialog = () => {
  const dispatch = useDispatch();
  const show = useSelector((st: Root) => st.relations.dropShow);
  const name = useSelector((st: Root) => st.relations.dropName);
  const error = useSelector((st: Root) => st.relations.dropErr);

  return (
    <Dialog
      open={show}
      onClose={() => dispatch(relationsDropShow([false, ""]))}
      aria-labelledby="rel-drop-dialog-title"
    >
      <DialogTitle id="rel-drop-dialog-title">Drop relation</DialogTitle>
      <DialogContent>
        <Typography>
          Are you sure you want to drop table <strong>{name}</strong>
        </Typography>
        {error && (
          <Typography>
            <ErrorIcon /> {error}
          </Typography>
        )}
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => dispatch(relationsDropShow([false, ""]))}
          color="primary"
        >
          Cancel
        </Button>
        <Button onClick={() => dispatch(relationsDropSubmit())} color="primary">
          Drop
        </Button>
      </DialogActions>
    </Dialog>
  );
};
