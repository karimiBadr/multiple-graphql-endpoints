const { pubsub } = require('../utils');

const Subscription = {
  Subscription: {
    animal_vote: {
      subscribe: () => pubsub.asyncIterator('animal_vote'),
    },
  },
};

module.exports = Subscription;
