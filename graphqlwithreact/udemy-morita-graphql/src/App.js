import React, { Component } from "react";
import { ApolloProvider } from "react-apollo";
import { Query } from "react-apollo";
import client from "./client";
import { SEARCH_REPOSITORIES } from "./graphql";

const DEFAULT_STATE = {
  after: null,
  before: null,
  first: 5,
  last: null,
  query: "フロントエンドエンジニア"
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = DEFAULT_STATE;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    console.log(event);
    this.setState({
      ...DEFAULT_STATE,
      query: event.target.value
    });
  }
  handleSubmit(event) {
    event.preventDefault();
  }
  render() {
    const { query, first, last, before, after } = this.state;
    console.log({ query });
    return (
      <ApolloProvider client={client}>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} value={query} />
        </form>
        <Query
          query={SEARCH_REPOSITORIES}
          variables={{ query, first, last, before, after }}
        >
          {({ loading, error, data }) => {
            if (loading) return "loading";
            if (error) return `Error! ${error.message}`;
            console.log({ data });
            return <div />;
          }}
        </Query>
      </ApolloProvider>
    );
  }
}

export default App;
