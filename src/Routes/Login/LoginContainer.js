import React from "react";
import LoginPresenter from "./LoginPresenter";
import { booksApi } from "api";

export default class extends React.Component {
  state = {
    nowPlaying: null,
    error: null,
    loading: true
  };

  async componentDidMount() {
    try {
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
      <LoginPresenter
        nowPlaying={nowPlaying}
        error={error}
        loading={loading}
      />
    );
  }
}