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
    const { email, password1, password2 } = this.state;
    if (email !== "" && password1 !== "" && password2 !== "" && password1 === password2) {
      this.signupTerm();
    }
  };

  signupTerm = async () => {
    const { email, password1, password2 } = this.state;
    try {
      const {
        data: { token }
      } = await loginApi.signup(email, password1, password2);
      this.setState({
        token,
        error: null
      });
    } catch(msg) {
      console.log(msg.response);
      this.setState({ error: msg.response.data.detail });
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    const { email, password, loading, error } = this.state;
    return (
      <SignupPresenter
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