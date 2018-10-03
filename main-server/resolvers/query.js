const fetch = require('node-fetch');
const ALL_ANIMALS_URL = `http://localhost:5000/api/v1/animals`;

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
