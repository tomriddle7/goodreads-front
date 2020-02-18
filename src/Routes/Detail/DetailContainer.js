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
      error: null,
      loading: true,
    };
  }

  getSubscribe = event => {
    event.preventDefault();
    const token = window.sessionStorage.getItem("token");
    if(token != null) {
      const resutn = shelfApi.getSubscribe(token, this.state.result.isbn);
      console.log(resutn);
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
    const { result, error, loading } = this.state;
    return (
      <DetailPresenter
        result={result}
        loading={loading}
        error={error}
        getSubscribe={this.getSubscribe}
      />
    );
  }
}