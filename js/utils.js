const DELAY = 500;

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

const isEscapeKey = (evt) => evt.key === 'Escape';

const debounce = (callback, timeoutDelay = DELAY) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

export{getRandomInteger, getRandomArrayElement, generateRandomId, isEscapeKey, debounce,DELAY};
