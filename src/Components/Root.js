import React, { Component } from "react";
import GlobalStyles from "./GlobalStyles";
import Router from "Components/Router";
import Header from "Components/Header";

class Root extends Component {
  render() {
    return (
      <>
        <Header />
        <Router />
        <GlobalStyles />
      </>
    )
  }
}

export default Root;
