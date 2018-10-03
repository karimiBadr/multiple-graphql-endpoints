const { animals } = require('../db');
const server = require('../server');
const chalk = require('chalk');
const log = console.log;

const serverMessage = (method, url) => {
  log(`${chalk.green(method)} ${chalk.blue(url)}`);
};

const voteMessage = (vote, name, votes) => {
  log(
    `${chalk.yellow.bold(vote)} ${chalk.red(name)} to ${chalk.blue(votes + 1)}`,
  );
};

const ENDPOINT_URL = '/api/v1/animals/:id';

module.exports = server.put(ENDPOINT_URL, (req, res) => {
  serverMessage('POST', ENDPOINT_URL);
  const { id } = req.params;
  const animal = animals.find((animal) => animal.id === id);
  const { name, upvotes, downvotes } = animal;

  if (!animal) {
    return res.status(404).send({
      success: 'false',
      message: 'animal not found',
    });
  }

  const { vote } = req.body;
  if (!vote) {
    return res.status(400).send({
      success: 'false',
      message: 'vote is required',
    });
  }
  if (vote === 'upvote') {
    voteMessage(vote, name, upvotes);
    animal.upvotes++;
  }
  if (vote === 'downvote') {
    voteMessage(vote, name, downvotes);
    animal.downvotes++;
  }
  return res.status(201).send({
    success: 'true',
    message: 'vote successfully logged',
    animal_vote: {
      id: id,
      vote: vote,
    },
  });
});
