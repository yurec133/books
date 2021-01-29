import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../api/api";
import { OutlinedCard } from "../components/Card";
import Grid from "@material-ui/core/Grid";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Loader } from "../components/Loader";

export const Home:React.FC = () => {

  interface RootState {
    isOn: boolean
  }

  const dispatch = useDispatch();
  const books = useSelector(({ items }: any) => items.books);
  const loading = useSelector(({ items }:any) => items.isLoading);
  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        flexGrow: 1
      }
    })
  );

  const classes = useStyles();

  if (loading) return <Loader />;

  return (
    <Grid container className={classes.root} spacing={2}>
      {books.map((book: any) => {
        const urlLast = book.url.split("/").pop();
        return (
          <Grid item key={book.isbn} xs={4}>
            <OutlinedCard
              id={urlLast}
              name={book.name}
              authors={book.authors}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};
