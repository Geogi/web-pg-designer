import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  Typography
} from "@material-ui/core";
import * as React from "react";
import {useSelector} from "react-redux";
import {Root} from "../reducers/root";
import {Column, Table} from "../reducers/database";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import DeleteIcon from "@material-ui/icons/Delete";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import KeyboardCapslockIcon from "@material-ui/icons/KeyboardCapslock";

const formatType = (c: Column) => {
  const attributes = [];
  c.nullable && attributes.push('nullable');
  c.primaryKey && attributes.push('primary key');
  return c.type + (attributes.length > 0 && ` (${attributes.join(", ")})`);
};

const Relation = () => {
  const relation = useSelector((st: Root) =>
    st.database.tables.find((t: Table) => t.name === st.navigation.relation));

  if (relation === undefined) {
    return <Card><CardContent>Error retrieving relation {relation ? relation : "unknown"}.</CardContent></Card>;
  }

  return <Card>
    <CardContent>
      <Typography variant="h5">{relation.name}</Typography>
      <List dense>
        {relation.cols.map((c: Column) => <ListItem key={c.name}>
          <ListItemAvatar>
            <Avatar>
              {!c.primaryKey ? c.nullable ? <KeyboardCapslockIcon/> : <KeyboardArrowUpIcon/> : <VpnKeyIcon/>}
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={c.name}
            secondary={formatType(c)}
          />
          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="delete">
              <DeleteIcon/>
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>)}
      </List>
    </CardContent>
    <CardActions>

    </CardActions>
  </Card>;
};

export default Relation;
