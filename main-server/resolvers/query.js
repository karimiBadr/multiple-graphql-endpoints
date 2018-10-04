const fetch = require('node-fetch');
const { API_PORT } = require('../../_shared/ports');

const ALL_ANIMALS_URL = `http://localhost:${API_PORT}/api/v1/animals`;

const resolvers = {
  Query: {
    animals: async (obj, args, context, info) => {
      return fetch(ALL_ANIMALS_URL)
        .then(
          (resp) => resp.json(),
          (error) => console.log(`an error occured`, error),
        )
        .then((json) => json.animals);
    },
  },
};

module.exports = { resolvers };
