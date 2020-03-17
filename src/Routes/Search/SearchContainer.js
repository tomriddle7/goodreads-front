import React from "react";
import SearchPresenter from "./SearchPresenter";
import { debounce } from 'lodash';
import { booksApi } from "api";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appResults: null,
      searchTerm: "",
      loading: false,
      error: null
    };
    this.goSearch = debounce(this.goSearch, 250);
  }

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
        data: { results: appResults }
      } = await booksApi.getSearchbyTerm(searchTerm);
      this.setState({
        appResults
      });
      console.log(appResults);
    } catch {
      this.setState({ error: "Can't find results." });
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    const { appResults, searchTerm, loading, error } = this.state;
    return (
      <SearchPresenter
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