const bodyParser = require('body-parser');
const server = require('./server');
const { API_PORT } = require('../_shared/ports');

// Parse incoming requests data
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));

const getAllAnimals = require('./endpoints/getAllAnimals');
const updateAnimal = require('./endpoints/updateAnimal');

server.listen(API_PORT, () => {
  console.log(`API server running on port ${API_PORT}`);
});
