import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import ValueBarChart from './ValueBarChart';
import BarChart from './BarChart';
import Vote from './Vote';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  > * + * {
    margin-top: 1rem;
  }
`;

const Heading = styled.h1`
  font-weight: bold;
  font-size: 2rem;
  padding: 2rem;
  text-align: center;
`;

const VoteOptions = styled.div`
  display: flex;
  flex-direction: row;
  > * + * {
    margin-left: 0.5rem;
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
      <Wrapper>
        <Heading>Votes: {votes}</Heading>
        <VoteOptions>
          {animals.map((animal, index) => (
            <Vote key={index} animal={animal} />
          ))}
        </VoteOptions>
        <BarChart title="Upvotes" animals={animals} keyVal="upvotes" />
        <BarChart title="Downvotes" animals={animals} keyVal="downvotes" />
        <ValueBarChart animals={animals} />
      </Wrapper>
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

                // forgive me father for I have sinned...
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
