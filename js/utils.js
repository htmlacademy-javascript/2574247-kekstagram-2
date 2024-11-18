const DELAY = 500;

const getRandomInteger = (upper, lower) =>
  Math.floor(Math.random() * (upper - lower + 1)) + lower;

const isEscapeKey = (evt) => evt.key === 'Escape';

const debounce = (callback, timeoutDelay = DELAY) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

export{getRandomInteger, isEscapeKey, debounce,DELAY};
