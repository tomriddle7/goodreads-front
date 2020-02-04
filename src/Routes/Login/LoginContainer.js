import React from "react";
import LoginPresenter from "./LoginPresenter";
import { loginApi } from "api";

export default class extends React.Component {
  state = {
    token: null,
    resStatus: "",
    tokenResult: null,
    username: "",
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
    const { username, password } = this.state;
    if (username !== "" && password !== "") {
      this.loginTerm();
    }
  };

  loginTerm = async () => {
    const { username, password } = this.state;
    console.log(username, password);
    try {
      const {
        data: { token },
        status: { resStatus }
      } = await loginApi.login(username, password);
      this.setState({
        token,
        resStatus
      });
      console.log(resStatus);
      if(resStatus == "200") {
        console.log(this.state.token);
      }
      const {
        data: { tokenResult }
      } = await loginApi.user("Token " + token); 
      this.setState({
        tokenResult
      });
      console.log(tokenResult);
    } catch {
      this.setState({ error: "Can't find results." });
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    const { username, password, loading, error } = this.state;
    return (
      <LoginPresenter
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