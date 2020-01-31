import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
  } from "react-router-dom";
import Home from "../Routes/Home";
import Detail from "../Routes/Detail";

export default () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/book/:id" component={Detail} />
      <Redirect from="*" to="/" />
    </Switch>
  </Router>
);