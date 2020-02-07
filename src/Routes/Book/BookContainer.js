import React from "react";
import BookPresenter from "./BookPresenter";
import { booksApi, getBookList } from "api";

export default class extends React.Component {
  state = {
    bookList: null,
    error: null,
    loading: true
  };

  async componentDidMount() {
    try {
      const returnList = await getBookList(1);
      this.setState({
        bookList: returnList
      });
    } catch {
      this.setState({
        error: "Can't find movie information."
      });
    } finally {
      console.log(this.state);
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