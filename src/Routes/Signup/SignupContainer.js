import React from "react";
import SignupPresenter from "./SignupPresenter";
import { loginApi } from "api";

export default class extends React.Component {
  state = {
    appResults: null,
    username: "",
    password: "",
    loading: false,
    error: null
  };

  handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState(prevstate => {
      const newState = { ...prevstate };
      newState[name] = value;
      return newState;
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { username, password } = this.state;
    console.log(username, password);
    if (username !== "" && password !== "") {
      this.loginTerm();
    }
  };

  loginTerm = async () => {
    const { username, password } = this.state;
    console.log(username, password);
    this.setState({ loading: true });
    try {
      const {
        data: { results: appResults }
      } = await loginApi.signup(username, password);
      this.setState({
        appResults
      });
    } catch {
      this.setState({ error: "Can't find results." });
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    const { username, password, loading, error } = this.state;
    return (
      <SignupPresenter
        username={username}
        password={password}
        loading={loading}
        error={error}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}