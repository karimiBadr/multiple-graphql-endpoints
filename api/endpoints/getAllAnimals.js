const { animals } = require('../db');
const server = require('../server');
const chalk = require('chalk');
const log = console.log;

const serverMessage = (method, url) => {
  log(`${chalk.green(method)} ${chalk.blue(url)}`);
};

const ENDPOINT_URL = '/api/v1/animals';

module.exports = server.get(ENDPOINT_URL, (req, res) => {
  serverMessage('GET', ENDPOINT_URL);
  res.status(200).send({
    success: 'true',
    message: 'animals retrieved successfully',
    animals: animals,
  });
});
