import {Card, CardContent, Link, Typography} from "@material-ui/core";
import * as React from "react";
import {useDispatch} from "react-redux";
import {navigatePage} from "../actions/actions";

export const Welcome = () => {
  const dispatch = useDispatch();

  return (
    <Card>
      <CardContent>
        <Typography variant="h5">Welcome</Typography>
        <Typography variant="body1">
          <Link onClick={() => dispatch(navigatePage("settings"))}>
            Connect
          </Link>{" "}
          to a database to start modeling.
        </Typography>
      </CardContent>
    </Card>
  );
};
