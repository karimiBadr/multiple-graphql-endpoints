const { gql } = require('apollo-server');

const typeDefs = gql`
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
`;

module.exports = typeDefs;
