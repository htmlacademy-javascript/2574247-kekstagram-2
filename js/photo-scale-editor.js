const smallerControl = document.querySelector('.scale__control--smaller');
const biggerControl = document.querySelector('.scale__control--bigger');
const scaleValueControl = document.querySelector('.scale__control--value');
const imgUploadPreview = document.querySelector('.img-upload__preview img');

const SCALE_STEP = 25;
const MIN_SCALE = 0;
const MAX_SCALE = 100;

let numericValue = parseInt(scaleValueControl.value, 10);

const isScaleValueTransform = (step) => {
  scaleValueControl.value = `${numericValue += step}%`;
  imgUploadPreview.style.transform = `scale(${numericValue / 100})`;
};

const onValueControlDecrease = () => {
  if(numericValue > MIN_SCALE){
    isScaleValueTransform(-SCALE_STEP);
  }
};
const onValueControlIncrease = () => {
  if(numericValue < MAX_SCALE){
    isScaleValueTransform(SCALE_STEP);
  }
};

smallerControl.addEventListener('click', onValueControlDecrease);
biggerControl.addEventListener('click', onValueControlIncrease);

