import { EFFECTS } from './constants.js';
import {passTarget, getUnit} from './utils.js';
import {defaultPhoto} from './upload-form.js';
const sliderElement = document.querySelector('.effect-level__slider');
const effectsList = document.querySelector('.effects__list');
const imgUploadEffectLevel = document.querySelector('.img-upload__effect-level');

noUiSlider.create(sliderElement,{
  range:{
    min: 0,
    max: 1,
  },
  connect: 'lower',
  start: 1,
  step: 0.1,
});

effectsList.addEventListener('click',(evt) => {
  const target = evt.target.value;
  if (!target) {
    return;
  }
  passTarget(target, sliderElement, imgUploadEffectLevel);
  sliderElement.noUiSlider.on('update', () => {
    defaultPhoto.style.filter = `${EFFECTS[target]}(${sliderElement.noUiSlider.get()}${getUnit()})`;
  });
});


