const getRandomInteger = (upper, lower) =>
  Math.floor(Math.random() * (upper - lower + 1)) + lower;

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

function generateRandomId(existingIds) {
  let randomId = getRandomInteger(1, 1000);
  while (existingIds.includes(randomId)) {
    randomId = getRandomInteger(1, 1000);
  }
  return randomId;
}


export{getRandomInteger, getRandomArrayElement, generateRandomId};
