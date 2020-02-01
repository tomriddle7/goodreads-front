import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
  } from "react-router-dom";
import Book from "../Routes/Book";
import Search from "../Routes/Search";
import Detail from "../Routes/Detail";

export default () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Book} />
      <Route path="/search" component={Search} />
      <Route path="/book/:id" exact component={Detail} />
      <Redirect from="*" to="/" />
    </Switch>
  </Router>
);