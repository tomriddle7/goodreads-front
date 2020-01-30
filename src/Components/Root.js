import React, { Component } from "react";
import GlobalStyles from "./GlobalStyles";
import Loader from "./Loader";

class Root extends Component {
  render() {
    return (
        <>
        <Loader />
        <GlobalStyles />
        </>
    )
  }
}

export default Root;
