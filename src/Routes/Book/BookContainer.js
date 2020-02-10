import React from "react";
import BookPresenter from "./BookPresenter";
import { booksApi } from "api";

export default class extends React.Component {
  state = {
    page: 1,
    bookList: [],
    error: null,
    loading: true
  };

  addBookList(bookList) {
    this.setState(prevstate => {
      const newState = { ...prevstate };
      newState["page"] = prevstate["page"] + 1;
      newState["bookList"] = [...prevstate["bookList"], ...bookList];
      return newState;
    });
  };

  async componentDidMount() {
    try {
      const {
        data: { results: bookList }
      } = await booksApi.getBookList(this.state.page);
      this.addBookList(bookList);
      console.log(this.state);
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
        addBookList={this.addBookList}
        error={error}
        loading={loading}
      />
    );
  }
}