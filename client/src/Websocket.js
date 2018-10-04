import { split } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';

// Create an http link:
const httpLink = new HttpLink({
  uri: 'http://localhost:3002/graphql',
});

// Create a WebSocket link:
const wsLink = new WebSocketLink({
  uri: `ws://localhost:3003/graphql`,
  options: {
    reconnect: true,
  },
});

// using the ability to split links, you can send data to each link
// depending on what kind of operation is being sent
export const link = split(
  // split based on operation type
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);
    return (
      (kind === 'OperationDefinition' && operation === 'subscription') ||
      (kind === 'OperationDefinition' && operation === 'mutation')
    );
  },
  wsLink,
  httpLink,
);

export default link;
