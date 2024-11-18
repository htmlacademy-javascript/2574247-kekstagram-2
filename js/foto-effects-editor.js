const EFFECTS = {
  chrome: { style: 'grayscale', unit: '', range: { min: 0, max: 1 }, step: 0.1, start: 1 },
  sepia: { style: 'sepia', unit: '', range: { min: 0, max: 1 }, step: 0.1, start: 1 },
  marvin: { style: 'invert', unit: '%', range: { min: 0, max: 100 }, step: 1, start: 100 },
  phobos: { style: 'blur', unit: 'px', range: { min: 0, max: 3 }, step: 0.1, start: 3 },
  heat: { style: 'brightness', unit: '', range: { min: 1, max: 3 }, step: 0.1, start: 3 },
  none: { style: 'none', unit: '', range: { min: 0, max: 1 }, step: 0.1, start: 1 }
};

const defaultPhoto = document.querySelector('.img-upload__preview img');
const sliderElement = document.querySelector('.effect-level__slider');
const effectsList = document.querySelector('.effects__list');
const imgUploadEffectLevel = document.querySelector('.img-upload__effect-level');
const effectLevelValue = document.querySelector('.effect-level__value');

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 1,
  },
  connect: 'lower',
  start: 1,
  step: 0.1,
});

sliderElement.noUiSlider.on('update', () => {
  const target = effectsList.querySelector('input:checked').value;
  if (target && EFFECTS[target]) {
    defaultPhoto.style.filter = `${EFFECTS[target].style}(${sliderElement.noUiSlider.get()}${EFFECTS[target].unit})`;
  }
  const defaultPhotoFilter = defaultPhoto.style.filter;
  effectLevelValue.value = defaultPhotoFilter.replace(/[^0-9.]+/g, '');
});

effectsList.addEventListener('click', (evt) => {
  const target = evt.target.value;
  if (!target || !EFFECTS[target]) {
    return;
  }
  sliderElement.noUiSlider.updateOptions({
    range: EFFECTS[target].range,
    start: EFFECTS[target].start,
    step: EFFECTS[target].step,
  });

  if (target === 'none') {
    defaultPhoto.style.filter = 'none';
    sliderElement.noUiSlider.set(1);
    imgUploadEffectLevel.classList.add('hidden');
  } else {
    imgUploadEffectLevel.classList.remove('hidden');
  }
});

const resetSlider = () => {
  sliderElement.noUiSlider.set(1);
  defaultPhoto.style.filter = 'none';
};
export{resetSlider};

