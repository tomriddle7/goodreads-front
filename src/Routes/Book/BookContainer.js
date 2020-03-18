import React from "react";
import BookPresenter from "./BookPresenter";
import { throttle } from "lodash";
import { booksApi } from "api";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      next: null,
      bookList: [],
      error: null,
      loading: true
    };
    this.onScroll = throttle(this.onScroll, 500);
  }

  onScroll() {
    let nearBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;
    if (!this.props.fetching && nearBottom) {
      this.addBookList();
    }
  }

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
      window.addEventListener("scroll", this.onScroll.bind(this), false);
    }
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll.bind(this), false);
  }

  render() {
    const { next, bookList, error, loading } = this.state;
    return (
      <BookPresenter
        next={next}
        bookList={bookList}
        error={error}
        loading={loading}
      />
    );
  }
}