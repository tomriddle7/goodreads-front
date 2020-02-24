import React, { Component } from "react";
import GlobalStyles from "./GlobalStyles";
import Router from "Components/Router";
import { TokenProvider } from 'Contexts/token';

const App = () => {
  return (
    <TokenProvider>
      <Router />
      <GlobalStyles />
    </TokenProvider>
  )
};

export default App;