import {Button, createStyles, makeStyles, Paper, TextField, Theme, Typography} from "@material-ui/core";
import * as React from "react";

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

const Settings = () => {
  const classes = useStyles();

  return <Paper className={classes.paper}>
    <Typography variant="h5">Settings</Typography>
    <form className={classes.form} noValidate autoComplete="off">
      <TextField label="Host" className={classes.textField} variant="outlined" margin="normal"/>
      <TextField label="Port" className={classes.textField} variant="outlined" margin="normal" type="number"/>
      <TextField label="Database" className={classes.textField} variant="outlined" margin="normal"/>
      <TextField label="User" className={classes.textField} variant="outlined" margin="normal"/>
      <TextField
        label="Password"
        className={classes.textField}
        variant="outlined"
        margin="normal"
        type="password"
      />
      <Button>Connect</Button>
    </form>
  </Paper>;
};

export default Settings;
