import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDetails } from "../api/api";
import { useParams } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Box, CircularProgress } from "@material-ui/core";
import { Loader } from "../components/Loader";
import TableRow from "@material-ui/core/TableRow";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";


interface ParamTypes {
  id: string
}

interface IDetails {
  [key: string]: string
}


export const Details:React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { id } = useParams<ParamTypes>();


  const detailsBook = useSelector(({ items }: any) => items.details);
  const loading = useSelector(({ items }: any) => items.isLoading);
  const loader = useSelector(({ items }: any) => items.loader);
  const characters = useSelector(({ items }: any) => items.characters);

  useEffect(() => {
    dispatch(fetchDetails(id));
  }, []);

  if (loading) return <Loader />;

  const { name, publisher, country, mediaType, numberOfPages }: IDetails = detailsBook;



  return (
    <Box component="div" m={1}>
      <Card>
        <CardContent>
          <Box component="div" mb={3}>
            <Button
              size="small"
              variant="contained"
              color="primary"
              onClick={() => history.push("/", { from: "HomePage" })}
              startIcon={<ArrowBackIcon />}
            >
              Back
            </Button>
          </Box>
          <Box component="div" mb={3}>
            <Typography variant="h4" component="h2">
              {name}
            </Typography>
          </Box>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Paper>
                <TableContainer>
                  <Table aria-label="simple table">
                    <TableBody>
                      <TableRow>
                        <TableCell>Publisher</TableCell>
                        <TableCell>{publisher}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Country</TableCell>
                        <TableCell>{country}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Media type</TableCell>
                        <TableCell>{mediaType}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Number of pages</TableCell>
                        <TableCell>{numberOfPages}</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper>
                <>
                  {!loader ? (
                    characters.map((item: any, id: number) => {
                      return (
                        <div key={id}>
                          <List component="nav">
                            <ListItem button>
                              <ListItemText primary={item.name} />
                            </ListItem>
                          </List>
                        </div>
                      );
                    })
                  ) : (
                    <Box
                      component="div"
                      p={5}
                      display="flex"
                      justifyContent="center"
                    >
                      <CircularProgress />
                    </Box>
                  )}
                </>
              </Paper>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};
