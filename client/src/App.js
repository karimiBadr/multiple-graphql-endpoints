import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import { apolloClient } from './ApolloClient';
import styled from 'styled-components';
import VotesPageWithData from './Votes';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

class App extends Component {
  render() {
    return (
      <ApolloProvider client={apolloClient}>
        <Wrapper>
          <VotesPageWithData />
        </Wrapper>
      </ApolloProvider>
    );
  }
}

export default App;
