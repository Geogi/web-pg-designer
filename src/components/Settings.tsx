import {Button, createStyles, makeStyles, Paper, TextField, Theme, Typography} from "@material-ui/core";
import * as React from "react";
import {OutlinedTextFieldProps} from "@material-ui/core/TextField";
import {useDispatch, useSelector} from "react-redux";
import {
  settingsChangeDatabase,
  settingsChangeHost,
  settingsChangePassword,
  settingsChangePort,
  settingsChangeUser
} from "../actions/actions";
import {defaultPort} from "../reducers/database";
import {Root} from "../reducers/root";
import CheckIcon from "@material-ui/icons/check";
import ErrorIcon from "@material-ui/icons/error";

const useStyles = makeStyles((theme: Theme) => createStyles({
  paper: {
    flexGrow: 1,
    padding: theme.spacing(2),
    margin: theme.spacing(4, 0),
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
  },
}));

const Outlined = (props: Omit<OutlinedTextFieldProps, 'variant'>) =>
  <TextField variant="outlined" margin="normal" autoComplete="off" {...props}/>;

type Ev = React.ChangeEvent<HTMLInputElement>;

const Settings = () => {
  const testResult = useSelector((st: Root) => st.database.testResult);
  const testMsg = useSelector((st: Root) => st.database.testMsg);
  const classes = useStyles();
  const dispatch = useDispatch();

  return <Paper className={classes.paper}>
    <Typography variant="h5">Settings</Typography>
    <form className={classes.form} noValidate autoComplete="off">
      <Outlined label="Host" className={classes.textField}
                onChange={({target: {value}}: Ev) => dispatch(settingsChangeHost(value))}/>
      <Outlined label="Port" className={classes.textField} type="number"
                onChange={({target: {value}}: Ev) => dispatch(settingsChangePort(parseInt(value) || defaultPort))}/>
      <Outlined label="Database" className={classes.textField}
                onChange={({target: {value}}: Ev) => dispatch(settingsChangeDatabase(value))}/>
      <Outlined label="User" className={classes.textField}
                onChange={({target: {value}}: Ev) => dispatch(settingsChangeUser(value))}/>
      <Outlined label="Password" className={classes.textField} type="password"
                helperText="Not securely stored."
                onChange={({target: {value}}: Ev) => dispatch(settingsChangePassword(value))}/>
      <Button>Connect</Button>
    </form>
    {testResult === true && <Typography><CheckIcon/> PostgreSQL version {testMsg}</Typography>}
    {testResult === true && <Typography><ErrorIcon/> Could not connect: {testMsg}</Typography>}
  </Paper>;
};

export default Settings;
