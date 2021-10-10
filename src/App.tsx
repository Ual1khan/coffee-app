import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Order from './pages/Order/Order';
import Details from './pages/Details/Details';

function App() {
  return (
    <Router>
      <div className="App">
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
