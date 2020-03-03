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
      star: 1,
      description: '',
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
    const { result, star, description } = this.state;
    if(window.sessionStorage.getItem("authenticated")) {
      if (star > 0 && star <= 5 && description !== "") {
        console.log(this.state);
        this.reviewConfirm(star, description, result.isbn);
      }
    }
    else {

    }
  }

  async reviewConfirm(star, description, isbn) {
    try {
      const {
        data: { id: id,
                created_at: created_at,
                user: user,
                book: book,
                star: star2,
                description: description2
              }
      } = await shelfApi.setReview(star, description, isbn);
      this.setState(prevstate => {
        const newState = { ...prevstate };
        newState["result"]["review"] = [...prevstate["result"]["review"], { id, created_at, user, book, star, description
        }];
        return newState;
      });
    } catch {
      this.setState({ error: "Can't find anything." });
    } finally {
      this.setState({ star: 1, description: '' });
    }
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
      this.setState({
        result
      });
      console.log(result);
    } catch {
      this.setState({ error: "Can't find anything." });
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    const { result, star, description, showPopup, error, loading } = this.state;
    return (
      <DetailPresenter
        result={result}
        star={star}
        description={description}
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