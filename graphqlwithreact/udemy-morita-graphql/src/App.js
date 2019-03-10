import React, { Component } from "react";
import { ApolloProvider } from "react-apollo";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import client from "./client";

const ql = gql`
  query me {
    user(login: "kenmori") {
      id
      user
      bol
    }
  }
`;
class App extends Component {
  render() {
    return;
    <ApolloProvider client={client}>
      <div className="App">Hello GraphQL</div>
      <Query query={ql}>
        {(loading, error, data) => {
          if (loading) return "loading";
          if (error) return error.messeage;
          return data.name;
        }}
      </Query>
    </ApolloProvider>;
  }
}

export default App;
