
import {InMemoryCache} from 'apollo-cache-inmemory';
import {ApolloLink} from 'apollo-client-preset';
import {ApolloClient} from 'apollo-client';
import { withClientState } from 'apollo-link-state';
import {initalState} from './state'
import {resolvers} from './resolvers'
// Set up Cache


const httpLink = new HttpLink({ // githubのapiを設定
  uri: 'https://api.github.com/graphql',
  headers: {
    authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`
  }
});


const stateLink = withClientState({
  cache,
  defaults: initalState,
  resolvers
})


// Initialize the Apollo Client
const client = new ApolloClient({
  link: ApolloLink.from([stateLink, httpLink]),
  cache: new InMemoryCache()
});

export {client};