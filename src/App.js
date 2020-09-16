import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Checkout from "./components/Checkout/Checkout";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";

function App() {
  return (
    //BEM
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route exact path="/checkout">
            <Checkout />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
