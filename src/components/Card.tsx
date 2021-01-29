import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";

interface ICardProps {
  name: string;
  authors: string[];
  id: number;
}

const useStyles = makeStyles({
  root: {
    minWidth: 275
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

export const OutlinedCard: React.FC<ICardProps> = ({ name, authors, id }) => {
  let history = useHistory();
  const classes = useStyles();

  const handlerMore = (id: number) => {
    history.push(`/details/${id}`);
  };

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h2">
          {name}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {authors.map(item => item).join()}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => handlerMore(id)}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};
