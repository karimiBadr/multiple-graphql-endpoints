const { gql } = require('apollo-server');

const typeDefs = gql`
  type AnimalVote {
    id: String
    vote: String
  }
  type Animal {
    id: String
    name: String
    color: String
    upvotes: Int
    downvotes: Int
  }
  type Query {
    animals: [Animal]
  }
  type Mutation {
    vote(animal_id: String!, vote: String!): String
  }
  type Subscription {
    # animal_votes: [Animal]
    animal_vote: AnimalVote
  }
`;

module.exports = typeDefs;
