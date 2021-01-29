import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import Container from "@material-ui/core/Container";
import { Details } from "./pages/Details";
import { Box } from "@material-ui/core";

function App() {
  return (
    <Container fixed>
      <Box pt={4} pb={4}>
        <Router>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/details/:id" component={Details} />
          </Switch>
        </Router>
      </Box>
    </Container>
  );
}

export default App;
