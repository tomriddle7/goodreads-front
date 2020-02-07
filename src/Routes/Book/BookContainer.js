import React from "react";
import BookPresenter from "./BookPresenter";
import { booksApi } from "api";

export default class extends React.Component {
  state = {
    bookList: null,
    error: null,
    loading: true
  };

  async componentDidMount() {
    try {
      const {
        data: { results: bookList }
      } = await booksApi.getList();
      this.setState({
        bookList
      });
      console.log(bookList);
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
    const { bookList, error, loading } = this.state;
    return (
      <BookPresenter
        bookList={bookList}
        error={error}
        loading={loading}
      />
    );
  }
}