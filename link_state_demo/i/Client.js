
import {InMemoryCache} from 'apollo-cache-inmemory';
import {ApolloLink} from 'apollo-client-preset';
import {ApolloClient} from 'apollo-client';

// Set up Cache
const cache = new InMemoryCache();

// Initialize the Apollo Client
const Client = new ApolloClient({
  link: ApolloLink.from([]),
  cache: cache,
});

export {Client};