import React from "react";
import LogoutPresenter from "./LogoutPresenter";

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
        window.sessionStorage.setItem('token', null);
        window.sessionStorage.setItem('authenticated', false);
        this.props.history.push('/');
        window.location.reload();
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