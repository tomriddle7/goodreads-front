import React, { Component } from "react";
import GlobalStyles from "./GlobalStyles";
import Router from "Components/Router";

class Root extends Component {
  render() {
    return (
      <>
        <Router />
        <GlobalStyles />
      </>
    )
  }
}

export default Root;
