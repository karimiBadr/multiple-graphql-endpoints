const uuid4 = require('uuid4');

const animals = [
  {
    id: uuid4(),
    name: 'wombat',
    color: 'hsl(0, 60%,60%)',
    upvotes: 20,
    downvotes: 2,
  },
  {
    id: uuid4(),
    name: 'koala',
    color: 'hsl(72, 60%,60%)',
    upvotes: 6,
    downvotes: 9,
  },
  {
    id: uuid4(),
    name: 'echidna',
    color: 'hsl(144, 60%,60%)',
    upvotes: 0,
    downvotes: 23,
  },
  {
    id: uuid4(),
    name: 'platypus',
    color: 'hsl(216, 60%,60%)',
    upvotes: 9,
    downvotes: 8,
  },
  {
    id: uuid4(),
    name: 'kookaburra',
    color: 'hsl(288, 60%,60%)',
    upvotes: 2,
    downvotes: 1,
  },
];

module.exports = {
  animals,
};
