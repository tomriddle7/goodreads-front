import React from "react";
import LogoutPresenter from "./LogoutPresenter";
import { loginApi } from "api";

export default class extends React.Component {
  state = {
    token: null,
    tokenResult: null,
    email: "",
    password: "",
    loading: true,
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
    this.logoutTerm();
  };

  logoutTerm = async () => {
    const { email, password } = this.state;
    try {
        window.sessionStorage.setItem('token', null);
        window.sessionStorage.setItem('authenticated', false);
        this.props.history.push('/');
    } catch {
      this.setState({ error: "Can't find results." });
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    const { email, password, loading, error } = this.state;
    return (
      <LogoutPresenter
        email={email}
        password={password}
        loading={loading}
        error={error}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}