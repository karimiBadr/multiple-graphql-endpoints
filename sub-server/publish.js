const { animals } = require('../_shared/mock');
const { randomArrayIndex, chosenValue } = require('../_shared/utils');
const { pubsub } = require('./utils');

console.log('publish');

const voteAnimal = () => {
  const targetIndex = randomArrayIndex(animals);
  const animal = animals[targetIndex];
  const voteAction = chosenValue('up', 'down');
  console.log(
    `voting '${animal.name}' ${voteAction} to ${
      voteAction === 'up' ? animal.value + 1 : animal.value - 1
    }`,
  );
  if (voteAction === 'up') {
    animal.upvotes++;
    animal.value++;
  }
  if (voteAction === 'down') {
    animal.downvotes++;
    animal.value--;
  }
  animal.total++;
  pubsub.publish('animals', { animal_votes: animals });
  // console.log({ animals });
};

(function loop() {
  var rand = Math.round(Math.random() * (10000 - 50)) + 50;
  setTimeout(function() {
    voteAnimal();
    loop();
  }, rand);
})();

(function loop() {
  var rand = Math.round(Math.random() * (20000 - 200)) + 200;
  setTimeout(function() {
    voteAnimal();
    loop();
  }, rand);
})();

(function loop() {
  var rand = Math.round(Math.random() * (3000 - 800)) + 800;
  setTimeout(function() {
    voteAnimal();
    loop();
  }, rand);
})();

(function loop() {
  var rand = Math.round(Math.random() * (9000 - 200)) + 200;
  setTimeout(function() {
    voteAnimal();
    loop();
  }, rand);
})();

(function loop() {
  var rand = Math.round(Math.random() * (6000 - 20)) + 20;
  setTimeout(function() {
    voteAnimal();
    loop();
  }, rand);
})();

(function loop() {
  var rand = Math.round(Math.random() * (6500 - 900)) + 900;
  setTimeout(function() {
    voteAnimal();
    loop();
  }, rand);
})();

(function loop() {
  var rand = Math.round(Math.random() * (6000 - 200)) + 200;
  setTimeout(function() {
    voteAnimal();
    loop();
  }, rand);
})();

(function loop() {
  var rand = Math.round(Math.random() * (25000 - 200)) + 200;
  setTimeout(function() {
    voteAnimal();
    loop();
  }, rand);
})();

(function loop() {
  var rand = Math.round(Math.random() * (9000 - 200)) + 200;
  setTimeout(function() {
    voteAnimal();
    loop();
  }, rand);
})();

(function loop() {
  var rand = Math.round(Math.random() * (7500 - 1000)) + 1000;
  setTimeout(function() {
    voteAnimal();
    loop();
  }, rand);
})();

(function loop() {
  var rand = Math.round(Math.random() * (6000 - 200)) + 200;
  setTimeout(function() {
    voteAnimal();
    loop();
  }, rand);
})();

(function loop() {
  var rand = Math.round(Math.random() * (25000 - 6000)) + 6000;
  setTimeout(function() {
    voteAnimal();
    loop();
  }, rand);
})();

(function loop() {
  var rand = Math.round(Math.random() * (30000 - 1000)) + 1000;
  setTimeout(function() {
    voteAnimal();
    loop();
  }, rand);
})();
