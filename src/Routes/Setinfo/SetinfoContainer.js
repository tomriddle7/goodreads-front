import React from "react";
import SetinfoPresenter from "./SetinfoPresenter";
import { meApi } from "api";

export default class extends React.Component {
  state = {
    results: null,
    email: "",
    nickname: "",
    password1: "",
    password2: "",
    loading: true,
    error: null
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.history.push('/Me');
    //this.userUpdate();
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

  async userUpdate() {
    const token = window.sessionStorage.getItem("token");
    try { 
      if(token != null) {
        const {
          data: results
        } = await meApi.updateMyData(token);
        this.setState({
          results,
          email: results.username,
          nickname: results.nickname
        });
      }
    } catch {
      this.setState({ error: "Can't find results." });
    } finally {
      this.setState({ loading: false });
    }
  }
  
  async componentDidMount() {
    const token = window.sessionStorage.getItem("token");
    try { 
      if(token != null) {
        const {
          data: results
        } = await meApi.getMyData(token);
        this.setState({
          results,
          email: results.username,
          nickname: results.nickname
        });
      }
    } catch {
      this.setState({ error: "Can't find results." });
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    const { results, email, nickname, password1, password2, error, loading } = this.state;
    return (
      <SetinfoPresenter
        results={results}
        email={email}
        nickname={nickname}
        password1={password1}
        password2={password2}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        error={error}
        loading={loading}
      />
    );
  }
}