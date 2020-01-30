import React, { Component } from "react";
import Root from "Components/Root";
import { Provider } from "react-redux";
import store from "Store/configure";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Root />
      </BrowserRouter>
    </Provider>
  );
};

export default App;