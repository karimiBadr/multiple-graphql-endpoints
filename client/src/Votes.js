import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Median from './Charts/Median';
import Chart from './Charts/Chart';
import Vote from './Vote';
import styled from 'styled-components';

const VoteOptions = styled.div`
  display: flex;
  flex-direction: row;
  height: 2rem;
  > * + * {
    margin-left: 1rem;
  }
`;

const ANIMAL_VOTES = gql`
  {
    animals {
      id
      name
      color
      upvotes
      downvotes
    }
  }
`;

const ANIMAL_VOTE_SUBSCRIPTION = gql`
  subscription {
    animal_vote {
      id
      vote
    }
  }
`;

class VotesPage extends Component {
  componentDidMount() {
    this.props.subscribeToNewVotes();
  }
  render() {
    const { data, loading, error } = this.props;
    if (loading) {
      return 'loading';
    }
    if (error) {
      return `error! ${error.message}`;
    }
    const { animals } = data;
    const votes = animals
      .map((animal) => animal.upvotes + animal.downvotes)
      .reduce((a, b) => a + b);
    return (
      <div>
        <h2>Votes: {votes}</h2>
        <VoteOptions>
          {animals.map((animal, index) => (
            <Vote key={index} animal={animal} />
          ))}
        </VoteOptions>
        <Chart title="Upvotes" animals={animals} keyVal="upvotes" />
        <Chart title="Downvotes" animals={animals} keyVal="downvotes" />
        <Median animals={animals} />
      </div>
    );
  }
}

const VotesPageWithData = () => {
  return (
    <Query query={ANIMAL_VOTES}>
      {({ subscribeToMore, ...result }) => (
        <VotesPage
          {...result}
          subscribeToNewVotes={() =>
            subscribeToMore({
              document: ANIMAL_VOTE_SUBSCRIPTION,
              updateQuery: (prev, { subscriptionData }) => {
                if (!subscriptionData.data) return prev;
                const animal_vote = subscriptionData.data.animal_vote;
                const { id, vote } = animal_vote;
                const { animals } = prev;
                const targetIndex = animals.findIndex(
                  (animal) => animal.id === id,
                );

                const test = JSON.stringify(animals);
                const parsedTest = JSON.parse(test);

                vote === 'upvote' && parsedTest[targetIndex].upvotes++;
                vote === 'downvote' && parsedTest[targetIndex].downvotes++;

                return Object.assign({}, prev, {
                  animals: [...parsedTest],
                });
              },
            })
          }
        />
      )}
    </Query>
  );
};

export default VotesPageWithData;
