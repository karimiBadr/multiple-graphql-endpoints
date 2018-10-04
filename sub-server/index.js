const { ApolloServer } = require('apollo-server');
const typeDefs = require('./type-defs');
const Query = require('./resolvers/query');
const Subscription = require('./resolvers/subscription');
const Mutation = require('./resolvers/mutation');

const { SUB_SERVER_PORT } = require('../_shared/ports');

const server = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: [Query, Mutation, Subscription],
});

server.listen({ port: SUB_SERVER_PORT }).then(({ url }) => {
  console.log(`🚀  Subscription server ready at ${url}`);
});
