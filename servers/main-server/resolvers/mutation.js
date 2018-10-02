const commentOps = require('./commentOps')

const resolvers = {
  Mutation: {
    comment: () => commentOps,
  },
};

module.exports = { resolvers };
