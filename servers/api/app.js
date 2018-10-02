const bodyParser = require('body-parser');
const server = require('./server');

// Parse incoming requests data
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));

const getAllAnimals = require('./endpoints/getAllAnimals');
const updateAnimal = require('./endpoints/updateAnimal');

const PORT = 5000;

server.listen(PORT, () => {
  console.log(`Rest API server running on port ${PORT}`);
});
