import React from "react";
import BookPresenter from "./BookPresenter";
import { booksApi } from "api";

export default class extends React.Component {
  state = {
    page: 1,
    next: null,
    bookList: [],
    error: null,
    loading: true
  };

  addBookList = (async () => {
    const {
      data: { next: next, results: bookList },
      status: resStatus
    } = await booksApi.getBookList(this.state.page);
    if(resStatus === 200) {
      this.setState(prevstate => {
        const newState = { ...prevstate };
        newState["page"] = prevstate["page"] + 1;
        newState["next"] = next;
        newState["bookList"] = [...prevstate["bookList"], ...bookList];
        return newState;
      });
    }
  });

  componentDidMount() {
    try {
      this.addBookList();
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
    const { next, bookList, error, loading } = this.state;
    return (
      <BookPresenter
        next={next}
        bookList={bookList}
        addBookList={this.addBookList}
        error={error}
        loading={loading}
      />
    );
  }
}