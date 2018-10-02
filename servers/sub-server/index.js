const { ApolloServer } = require('apollo-server');
const typeDefs = require('./type-defs');
const Query = require('./resolvers/query');
const Subscription = require('./resolvers/subscription');
const Mutation = require('./resolvers/mutation');

const schema = {
  typeDefs: typeDefs,
  resolvers: [Query, Mutation, Subscription],
};

const server = new ApolloServer(schema);

const PORT = 3001;

server.listen({ port: PORT }).then(({ url }) => {
  console.log(`🚀  Subscription server ready at ${url}`);
});
