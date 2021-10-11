import React from 'react';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Order from './pages/Order/Order';
import Details from './pages/Details/Details';
import useStyles from "./App.styles";

function App() {
  const classes = useStyles();

  return (
    <Router>
      <div className={classes.container}>
        <Header />
        <Switch>
          <Route path="/order">
            <Order />
          </Route>
          <Route path="/details/:id">
            <Details />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
