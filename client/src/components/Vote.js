import React from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  background: ${({ color }) => color};
  box-shadow: 0 0.1rem 0.75rem 0 hsl(216, 29%, 0%, 0.3);
  border-radius: 0.15rem;
  overflow: hidden;
`;

const Button = styled.button`
  background: none;
  text-shadow: .1rem .1rem .1rem hsla(0, 0%, 0%, .3);
  padding: 0.5rem;
  font-weight: bold;
  border: none;
  color: white;
  cursor: pointer;
  &:hover {
    background: hsla(0, 0%, 95%, 0.5);
  }
`;

const Label = styled.label`
  font-weight: bold;
  text-shadow: .1rem .1rem .1rem hsla(0, 0%, 0%, .3);
  padding: 0.5rem 0.75rem 0.5rem 0.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.75rem;
  color: white;
`;

const VOTE = gql`
  mutation vote($animal_id: String!, $vote: String!) {
    vote(animal_id: $animal_id, vote: $vote)
  }
`;

const Up = ({ vote, id }) => {
  const variables = { variables: { animal_id: id, vote: 'upvote' } };
  return <Button onClick={() => vote(variables)}>+</Button>;
};

const Down = ({ vote, id }) => {
  const variables = { variables: { animal_id: id, vote: 'downvote' } };
  return <Button onClick={() => vote(variables)}>-</Button>;
};

const Vote = ({ animal }) => {
  const { id, name, color } = animal;
  return (
    <Mutation mutation={VOTE}>
      {(vote, { data }) => (
        <Container color={color}>
          <Down vote={vote} id={id} />
          <Label>{name}</Label>
          <Up vote={vote} id={id} />
        </Container>
      )}
    </Mutation>
  );
};

export default Vote;
