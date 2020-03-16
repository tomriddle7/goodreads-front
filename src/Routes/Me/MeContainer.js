import React from "react";
import MePresenter from "./MePresenter";
import { meApi } from "api";

export default class extends React.Component {
  state = {
    results: null,
    toggleValue: "info",
    loading: true,
    error: null
  };

  toggleState = value => {
    this.setState({toggleValue: value});
  }
  Setinfo = () => {
    window.location = window.location.origin + `/Setinfo`;
  }
  
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
    const { results, toggleValue, error, loading } = this.state;
    return (
      <MePresenter
        results={results}
        toggleValue={toggleValue}
        toggleState={this.toggleState}
        Setinfo={this.Setinfo}
        error={error}
        loading={loading}
      />
    );
  }
}