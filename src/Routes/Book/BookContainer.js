import React from "react";
import BookPresenter from "./BookPresenter";
import { booksApi } from "api";

export default class extends React.Component {
  state = {
    nowPlaying: null,
    error: null,
    loading: true
  };

  async componentDidMount() {
    try {
      const {
        data: { results: nowPlaying }
      } = await booksApi.getList();
      this.setState({
        nowPlaying
      });
      console.log(nowPlaying);
    } catch {
      this.setState({
        error: "Can't find movie information."
      });
    } finally {
      this.setState({
        loading: false
      });
    }
  }

  render() {
    const { nowPlaying, error, loading } = this.state;
    return (
      <BookPresenter
        nowPlaying={nowPlaying}
        error={error}
        loading={loading}
      />
    );
  }
}