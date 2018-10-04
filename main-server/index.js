const { ApolloServer } = require('apollo-server');
const typeDefs = require('./type-defs');
const resolvers = require('./resolvers/query').resolvers;

const { MAIN_SERVER_PORT } = require('../_shared/ports');

const server = new ApolloServer({ typeDefs, resolvers });

server.listen({ port: MAIN_SERVER_PORT }).then(({ url }) => {
  console.log(`🚀  Main server ready at ${url}`);
});
