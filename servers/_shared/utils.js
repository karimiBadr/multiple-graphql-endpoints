const randomArrayIndex = (arr) => {
  return Math.floor(Math.random() * arr.length);
};

const chosenValue = (val1, val2) => {
  return Math.random() < 0.5 ? val1 : val2;
};

module.exports = {
  generateId,
  randomArrayIndex,
  chosenValue,
};
