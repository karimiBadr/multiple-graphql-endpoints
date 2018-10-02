import React from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  border: solid 1px black;
  background: ${({ color }) => color};
`;

const Button = styled.button`
  background: hsl(0, 0%, 80%);
  border-style: solid;
  border-color: black;
  font-weight: bold;
  margin: 0;
  padding: 5px 10px 5px 10px;
  &:first-of-type {
    border-width: 0 1px 0 0;
  }
  &:last-of-type {
    border-width: 0 0 0 1px;
  }
  cursor: pointer;
  &:hover {
    background: hsl(0, 0%, 95%)
  }
`;

const Label = styled.label`
  padding: 0 1rem 0 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.75rem;
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
