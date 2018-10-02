import React, { Fragment } from 'react';
import gql from 'graphql-tag';
import { Subscription } from 'react-apollo';
import Chart from './Chart';
import Median from './Median';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 40rem;
`;

const ANIMAL_VOTES = gql`
  subscription {
    animal_votes {
      name
      value
      color
      upvotes
      downvotes
      total
    }
  }
`;

const Section = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  > * + * {
    margin-left: 0.25rem;
  }
`;

const Key = styled.div`
  display: flex;
  flex-direction: row;
  width: 40rem;
  > * + * {
    margin-left: 0.5rem;
  }
`;

const Box = styled.div`
  height: 1rem;
  width: 1rem;
  background: ${({ color }) => color};
  border-radius: 0.15rem;
`;

const Charts = () => {
  return (
    <Subscription subscription={ANIMAL_VOTES}>
      {({ data, loading }) => {
        if (loading) {
          return 'loading...';
        }
        const animals = data.animal_votes;
        const totalVotes = animals
          .map((animal) => Math.abs(animal.upvotes + animal.downvotes))
          .reduce((a, b) => a + b);
        return (
          <Fragment>
            <br />
            <h2>Animals - votes: {totalVotes}</h2>
            <Key>
              {animals.map((animal) => (
                <Section>
                  <Box color={animal.color} />
                  <label>{animal.name}</label>
                </Section>
              ))}
            </Key>
            <br />
            <br />
            <Chart title="Upvotes" animals={animals} keyVal="upvotes" />
            <Chart title="Downvotes" animals={animals} keyVal="downvotes" />
            <Median animals={animals} />
          </Fragment>
        );
      }}
    </Subscription>
  );
};

export default Charts;
