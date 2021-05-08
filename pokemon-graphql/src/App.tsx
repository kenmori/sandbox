import React from 'react';
import './App.css';
import { ApolloProvider } from "@apollo/client"
import { apolloClient } from "./graphql/client"
import SearchResult from "./components/SearchResult"
function App() {
  return (
    <ApolloProvider client={apolloClient}>
     <SearchResult />
    </ApolloProvider>
  );
}

export default App;
