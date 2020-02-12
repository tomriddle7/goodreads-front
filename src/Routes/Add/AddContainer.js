import React from "react";
import AddPresenter from "./AddPresenter";
import { booksApi } from "api";

export default class extends React.Component {
  state = {
    appResults: null,
    searchTerm: "",
    loading: false,
    error: null
  };

  handleSubmit = event => {
    event.preventDefault();
    this.goSearch();
  };

  updateTerm = event => {
    const {
      target: { value }
    } = event;
    this.setState({
      searchTerm: value
    });
    console.log(value);
    this.goSearch();
  };

  goSearch = () => {
    const { searchTerm } = this.state;
    if (searchTerm !== "") {
      this.searchByTerm();
    }
  };

  searchByTerm = async () => {
    const { searchTerm } = this.state;
    console.log(searchTerm);
    this.setState({ loading: true });
    try {
      const {
        data: appResults
      } = await booksApi.getSearchbyKakao(searchTerm);
      this.setState({
        appResults
      });
      console.log(this.state);
    } catch {
      this.setState({ error: "Can't find results." });
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    const { appResults, searchTerm, loading, error } = this.state;
    return (
      <AddPresenter
        appResults={appResults}
        loading={loading}
        error={error}
        searchTerm={searchTerm}
        handleSubmit={this.handleSubmit}
        updateTerm={this.updateTerm}
      />
    );
  }
}