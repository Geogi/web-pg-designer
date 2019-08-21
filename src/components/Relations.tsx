import * as React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Root} from "../reducers/root";
import {Table} from "../reducers/database";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  createStyles,
  Grid,
  makeStyles,
  Typography
} from "@material-ui/core";
import {navigateRelation} from "../actions/actions";
import DeleteIcon from "@material-ui/icons/Delete";

const cardWidth = 200;

const useStyles = makeStyles(() => createStyles({
  cards: {
    width: cardWidth,
  },
}));

const Relations = () => {
  const tables = useSelector((st: Root) => st.database.tables);
  const classes = useStyles();
  const dispatch = useDispatch();

  return <Grid container justify="center" spacing={2}>
    {tables.map((t: Table) => <Grid item key={t.name}>
      <Card className={classes.cards}>
        <CardActionArea onClick={() => dispatch(navigateRelation(t.name))}>
          <CardContent>
            <Typography variant="h6">{t.name}</Typography>
            <Typography>{t.cols.length} columns</Typography>
            <Typography>{t.rowCount} rows</Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary"><DeleteIcon/> Drop</Button>
        </CardActions>
      </Card>
    </Grid>)}
  </Grid>;
};

export default Relations;
