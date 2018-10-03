import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { link } from './Websocket';

export const apolloClient = new ApolloClient({
  link: link,
  cache: new InMemoryCache()
});
