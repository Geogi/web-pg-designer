import {Button, Card, CardContent, Typography} from "@material-ui/core";
import * as React from "react";
import {useDispatch, useSelector} from "react-redux";
import {settingsDatabase, settingsHost, settingsPassword, settingsPort, settingsUser} from "../actions/actions";
import {defaultPort} from "../reducers/database";
import {Root} from "../reducers/root";
import CheckIcon from "@material-ui/icons/Check";
import ErrorIcon from "@material-ui/icons/Error";
import {databaseStart} from "../actions/thunks/database";
import {Ev, Outlined, useFormStyles} from "./utils/forms";

// noinspection DuplicatedCode
const Settings = () => {
  const connected = useSelector((st: Root) => st.database.connected);
  const testResult = useSelector((st: Root) => st.database.testResult);
  const fieldHost = useSelector((st: Root) => st.database.fieldHost);
  const fieldPort = useSelector((st: Root) => st.database.fieldPort);
  const fieldDatabase = useSelector((st: Root) => st.database.fieldDatabase);
  const fieldUser = useSelector((st: Root) => st.database.fieldUser);
  const fieldPassword = useSelector((st: Root) => st.database.fieldPassword);
  const user = useSelector((st: Root) => st.database.user);
  const host = useSelector((st: Root) => st.database.host);
  const database = useSelector((st: Root) => st.database.database);
  const classes = useFormStyles();
  const dispatch = useDispatch();

  return <Card>
    <CardContent>
      <Typography variant="h5">Settings</Typography>
      <form className={classes.form} noValidate autoComplete="off">
        <Outlined label="Host" className={classes.inputField} value={fieldHost}
                  onChange={({target: {value}}: Ev) => dispatch(settingsHost(value))}/>
        <Outlined label="Port" className={classes.inputField} type="number" value={fieldPort}
                  onChange={({target: {value}}: Ev) => dispatch(settingsPort(parseInt(value) || defaultPort))}/>
        <Outlined label="Database" className={classes.inputField} value={fieldDatabase}
                  onChange={({target: {value}}: Ev) => dispatch(settingsDatabase(value))}/>
        <Outlined label="User" className={classes.inputField} value={fieldUser}
                  onChange={({target: {value}}: Ev) => dispatch(settingsUser(value))}/>
        <Outlined label="Password" className={classes.inputField} type="password" value={fieldPassword}
                  onChange={({target: {value}}: Ev) => dispatch(settingsPassword(value))}/>
        <Button className={classes.button} variant="contained" color="primary"
                onClick={() => dispatch(databaseStart())}>
          {connected ? "Reconnect" : "Connect"}
        </Button>
      </form>
      {connected === true && <Typography><CheckIcon/> Connected to {user}@{host}/{database}. Server version: {testResult}</Typography>}
      {connected === false && <Typography><ErrorIcon/> Could not connect: {testResult}</Typography>}
    </CardContent>
  </Card>;
};

export default Settings;
