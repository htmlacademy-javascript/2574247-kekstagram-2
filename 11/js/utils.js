let unit = '';
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

const passTarget = (target, sliderElement, imgUploadEffectLevel) => {
  if (target === 'none') {
    imgUploadEffectLevel.classList.add('hidden');
  } else {
    imgUploadEffectLevel.classList.remove('hidden');
  }

  if (target === 'chrome' || target === 'sepia') {
    unit = '';
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1,
    });
  }

  if (target === 'heat') {
    unit = '';
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 1,
        max: 3,
      },
      start: 3,
      step: 0.1,
    });
  }

  if (target === 'marvin') {
    unit = '%';
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 100,
      },
      start: 100,
      step: 1,
    });
  }

  if (target === 'phobos') {
    unit = 'px';
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 3,
      },
      start: 3,
      step: 0.1,
    });
  }
};

const getUnit = () => unit;


export{getRandomInteger, getRandomArrayElement, generateRandomId, isEscapeKey, passTarget, getUnit};
