import React from "react";
import LoginPresenter from "./LoginPresenter";
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
    const { email, password } = this.state;
    if (email !== "" && password !== "") {
      this.loginTerm();
    }
  };

  loginTerm = async () => {
    const { email, password } = this.state;
    try {
      const {
        data: { token },
        status: resStatus,
        statusText: resStatusText
      } = await loginApi.login(email, password);
      this.setState({
        token
      });
      console.log(resStatusText);
      if(resStatus === 200 && resStatusText === "OK") {
        //로그인 성공
        this.props.history.push('/Home')
      }
    } catch {
      this.setState({ error: "Can't find results." });
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    const { email, password, loading, error } = this.state;
    return (
      <LoginPresenter
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