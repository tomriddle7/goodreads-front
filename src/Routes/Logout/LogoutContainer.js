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

  logoutTerm = async () => {
    const { email, password } = this.state;
    try {
        this.props.setValue(this.state.token);
        this.props.history.push('/');
    } catch {
      this.setState({ error: "Can't find results." });
    } finally {
      this.setState({ loading: false });
    }
  };

  componentDidMount() {
    this.logoutTerm();
  }

  render() {
    return (
      <LogoutPresenter/>
    );
  }
}