import React from "react";
import HomePresenter from "./HomePresenter";
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
      <HomePresenter
        nowPlaying={nowPlaying}
        error={error}
        loading={loading}
      />
    );
  }
}