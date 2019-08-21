import {Card, CardContent, Link, Typography} from "@material-ui/core";
import * as React from "react";
import {useDispatch} from "react-redux";
import {navigateSettings} from "../actions/actions";

const Welcome = () => {
  const dispatch = useDispatch();

  return <Card>
    <CardContent>
      <Typography variant="h5">Welcome</Typography>
      <Typography variant="body1">
        <Link onClick={() => dispatch(navigateSettings())}>Connect</Link>
        {" "}to a database to start modeling.
      </Typography>
    </CardContent>
  </Card>;
};

export default Welcome;
