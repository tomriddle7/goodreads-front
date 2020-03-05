import React from "react";
import MePresenter from "./MePresenter";
import { meApi } from "api";

export default class extends React.Component {
  state = {
    results: null,
    loading: true,
    error: null
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
    const { results, error, loading } = this.state;
    return (
      <MePresenter
        results={results}
        error={error}
        loading={loading}
      />
    );
  }
}