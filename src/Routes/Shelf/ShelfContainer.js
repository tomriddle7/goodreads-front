import React from "react";
import ShelfPresenter from "./ShelfPresenter";
import { shelfApi } from "api";

export default class extends React.Component {
  state = {
    results: null,
    loading: false,
    error: null
  };
  
  async componentDidMount() {
    const token = window.sessionStorage.getItem("token");
    try { 
      if(token != null) {
        console.log(token);
        const {
          data: results
        } = await shelfApi.getMyShelf(token);
        this.setState({
          results: results.results
        });
        console.log(this.state);
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
      <ShelfPresenter
        results={results}
        error={error}
        loading={loading}
      />
    );
  }
}