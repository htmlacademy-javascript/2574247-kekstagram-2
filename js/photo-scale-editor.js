const SCALE_STEP = 25;
const MIN_SCALE = 25;
const MAX_SCALE = 100;
import {defaultPhoto} from './upload-form';
const smallerControl = document.querySelector('.scale__control--smaller');
const biggerControl = document.querySelector('.scale__control--bigger');
const scaleValueControl = document.querySelector('.scale__control--value');

let numericValue = parseInt(scaleValueControl.value, 10);

const isScaleValueTransform = (step) => {
  scaleValueControl.value = `${numericValue += step}%`;
  defaultPhoto.style.transform = `scale(${numericValue / 100})`;
};

const onScaleControlSmallerClick = () => {
  if(numericValue > MIN_SCALE){
    isScaleValueTransform(-SCALE_STEP);
  }
};
const onScaleControlBiggerClick = () => {
  if(numericValue < MAX_SCALE){
    isScaleValueTransform(SCALE_STEP);
  }
};
smallerControl.addEventListener('click', onScaleControlSmallerClick,);
biggerControl.addEventListener('click', onScaleControlBiggerClick);

