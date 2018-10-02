const { ApolloServer } = require('apollo-server');
const typeDefs = require('./type-defs');
const resolvers = require('./resolvers/query').resolvers;

const server = new ApolloServer({ typeDefs, resolvers });

const PORT = 3002;

server.listen({ port: PORT }).then(({ url }) => {
  console.log(`🚀  Main server ready at ${url}`);
});
