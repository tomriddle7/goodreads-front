import React from "react";
import SetinfoPresenter from "./SetinfoPresenter";
import { meApi } from "api";

export default class extends React.Component {
  state = {
    results: null,
    email: "",
    nickname: "",
    password: "",
    loading: true,
    error: null
  };

  handleSubmit = event => {
    event.preventDefault();
  };
  
  async componentDidMount() {
    const token = window.sessionStorage.getItem("token");
    try { 
      if(token != null) {
        const {
          data: results
        } = await meApi.getMyData(token);
        this.setState({
          results
        });
      }
    } catch {
      this.setState({ error: "Can't find results." });
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    const { results, email, nickname, password, error, loading } = this.state;
    return (
      <SetinfoPresenter
        results={results}
        email={email}
        nickname={nickname}
        password={password}
        handleSubmit={this.handleSubmit}
        error={error}
        loading={loading}
      />
    );
  }
}