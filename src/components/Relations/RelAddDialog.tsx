import {Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography} from "@material-ui/core";
import * as React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Root} from "../../reducers/root";
import {relationsCreateName, relationsCreateShow} from "../../actions/actions";
import {Ev, Outlined, useFormStyles} from "../utils/forms";
import {relationsCreateSubmit} from "../../actions/thunks/relations";
import ErrorIcon from "@material-ui/icons/Error";

const RelAddDialog = () => {
  const dispatch = useDispatch();
  const show = useSelector((st: Root) => st.relations.createShow);
  const name = useSelector((st: Root) => st.relations.createName);
  const error = useSelector((st: Root) => st.relations.createErr);
  const classes = useFormStyles();

  return <Dialog open={show} onClose={() => dispatch(relationsCreateShow(false))}
                 aria-labelledby="rel-add-dialog-title">
    <DialogTitle id="rel-add-dialog-title">New Relation</DialogTitle>
    <DialogContent>
      <Outlined label="Name" className={classes.inputField} value={name}
                onChange={({target: {value}}: Ev) => dispatch(relationsCreateName(value))}/>
      {error && <Typography><ErrorIcon/> {error}</Typography>}
    </DialogContent>
    <DialogActions>
      <Button onClick={() => dispatch(relationsCreateShow(false))} color="primary">
        Cancel
      </Button>
      <Button onClick={() => dispatch(relationsCreateSubmit())} color="primary">
        Create
      </Button>
    </DialogActions>
  </Dialog>;
};

export default RelAddDialog;
