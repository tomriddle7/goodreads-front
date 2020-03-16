import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
  } from "react-router-dom";
import Header from "./Header";
import Book from "../Routes/Book";
import Search from "../Routes/Search";
import Add from "../Routes/Add";
import Login from "../Routes/Login";
import Logout from "../Routes/Logout";
import Signup from "../Routes/Signup";
import Shelf from "../Routes/Shelf";
import Me from "../Routes/Me";
import Setinfo from "../Routes/Setinfo";
import Detail from "../Routes/Detail";

export default () => (
  <Router>
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={Book} />
        <Route path="/search" component={Search} />
        <Route path="/Add" component={Add} />
        <Route path="/Login" component={Login} />
        <Route path="/Logout" component={Logout} />
        <Route path="/Signup" component={Signup} />
        <Route path="/Shelf" component={Shelf} />
        <Route path="/Me" component={Me} />
        <Route path="/Setinfo" component={Setinfo} />
        <Route path="/book/:id" exact component={Detail} />
        <Redirect from="*" to="/" />
      </Switch>
    </>
  </Router>
);