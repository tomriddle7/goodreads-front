import React, { Component } from "react";
import DetailPresenter from "./DetailPresenter";
import { booksApi, shelfApi } from "api";
import { TokenConsumer } from 'Contexts/token';

let contextType = TokenConsumer;

export default class extends React.Component {
  constructor(props) {
    super(props);
    const {
      location: { pathname }
    } = props;
    this.state = {
      result: null,
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

  getSubscribe = event => {
    event.preventDefault();
    
    if(contextType.state.value != null) {
      const subscribe = shelfApi.getSubscribe(contextType.state.value, this.state.result.isbn);
    }
    else {
      this.togglePopup();
    }
  };

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
    const { result, showPopup, error, loading } = this.state;
    return (
      <DetailPresenter
        result={result}
        showPopup={showPopup}
        loading={loading}
        error={error}
        getSubscribe={this.getSubscribe}
        togglePopup={this.togglePopup}
      />
    );
  }
}