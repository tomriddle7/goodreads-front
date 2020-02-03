import React from "react";
import SignupPresenter from "./SignupPresenter";
import { loginApi } from "api";

export default class extends React.Component {
  state = {
    token: null,
    username: "",
    email: "",
    password1: "",
    password2: "",
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
    const { username, email, password1, password2 } = this.state;
    if (username !== "" && email !== "" && password1 !== "" && password2 !== "" && password1 === password2) {
      this.signupTerm();
    }
  };

  signupTerm = async () => {
    const { username, email, password1, password2 } = this.state;
    console.log(username, email, password1, password2);
    try {
      const {
        data: { token }
      } = await loginApi.signup(username, email, password1, password2);
      this.setState({
        token
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