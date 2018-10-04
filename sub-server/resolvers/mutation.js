const { pubsub, postData } = require('../utils');
const { API_PORT } = require('../../_shared/ports');

const ALL_ANIMALS_URL = `http://localhost:${API_PORT}/api/v1/animals/`;

const Mutation = {
  Mutation: {
    vote: async (obj, args, context, info) => {
      console.log("Mutation: 'vote'");
      console.log({ args });
      const { animal_id, vote } = args;
      const url = ALL_ANIMALS_URL + animal_id;
      await postData(url, { vote: vote })
        .then((data) => {
          const { animal_vote } = data;
          pubsub.publish('animal_vote', {
            animal_vote: animal_vote,
          });
        })
        .catch((error) => console.error(error));
    },
  },
};

module.exports = Mutation;
