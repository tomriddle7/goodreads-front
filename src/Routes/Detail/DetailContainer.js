import React from "react";
import DetailPresenter from "./DetailPresenter";
import { booksApi, shelfApi } from "api";

export default class extends React.Component {
  constructor(props) {
    super(props);
    const {
      location: { pathname }
    } = props;
    this.state = {
      result: null,
      star: 0,
      description: null,
      showPopup: false,
      error: null,
      loading: true,
    };
  }
  togglePopup() {
    this.setState({
      showPopup: true
    });
    window.setTimeout(() => {
      this.setState({
        showPopup: false
      });
    }, 2000);
  }

  onChangeStar = event => {
    event.preventDefault();
    this.setState({
      star: event.target.value
    });
    console.log(this.state);
  }

  getSubscribe = event => {
    event.preventDefault();
    const Authenticated = window.sessionStorage.getItem("authenticated");
    const token = window.sessionStorage.getItem("token");
    if(Authenticated === "true") {
      const subscribe = shelfApi.getSubscribe(token, this.state.result.isbn);
      console.log(subscribe);
    }
  }

  handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState(prevstate => {
      const newState = { ...prevstate };
      newState[name] = value;
      return newState;
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { star, description } = this.state;
    if (star >= 0 && star <= 5 && description !== null && description !== "") {
      console.log(this.state);
      this.reviewConfirm(star, description);
    }
  }

  async reviewConfirm(star, description) {
    try {
      const {
        data: { id: id,
                created_at: created_at,
                user: user,
                book: book,
                star: star2,
                description: description2
              }
      } = await shelfApi.setReview(star, description);
      this.setState(prevstate => {
        const newState = { ...prevstate };
        newState["result"]["review"] = [...prevstate["result"]["review"], { id, created_at, user, book, star2, description
        }];
        return newState;
      });
    } catch {
      this.setState({ error: "Can't find anything." });
    } finally {
  }

  async componentDidMount() {
    const {
      match: {
        params: { id }
      },
      history: { push }
    } = this.props;
    const parsedId = parseInt(id);
    if (isNaN(parsedId)) {
      return push("/");
    }
    let result = null;
    try {
      ({ data: result } = await booksApi.getInstance(parsedId));
      console.log(result);
    } catch {
      this.setState({ error: "Can't find anything." });
    } finally {
      this.setState({ loading: false, result });
    }
  }

  render() {
    const { result, star, review, showPopup, error, loading } = this.state;
    return (
      <DetailPresenter
        result={result}
        star={star}
        review={review}
        showPopup={showPopup}
        loading={loading}
        error={error}
        onChangeStar={this.onChangeStar}
        getSubscribe={this.getSubscribe}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        togglePopup={this.togglePopup}
      />
    );
  }
}