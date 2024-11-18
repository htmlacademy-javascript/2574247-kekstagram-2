const MAX_QUANTITY_HASHTAG = 5;
const MAX_QUANTITY_SIMBOL = 20;
const MAX_COMMENTS_LENGTH = 140;
const uploadForm = document.querySelector('.img-upload__form');
const hashtagInput = uploadForm.querySelector('.text__hashtags');
const commentInput = uploadForm.querySelector('.text__description');

let errorMessage = '';
const pristine = new Pristine(uploadForm, {
  classTo: 'img-upload__form',
  errorTextParent: 'img-upload__field-wrapper ',
  errorTextTag: 'div',
  errorTextClass: 'img-upload__field-wrapper--error',
});


const showEror = () => errorMessage;

const isCommentsValid = (value) => {
  errorMessage = '';
  if(value.trim().length >= MAX_COMMENTS_LENGTH){
    errorMessage = 'Длина комментариев не может составлять больше 140 символов';
    return false;
  }
  return true;
};
pristine.addValidator(commentInput, isCommentsValid, showEror);

const isHashtagsValid = (value) => {
  errorMessage = '';
  const inputTextValue = value.toLowerCase().trim();

  if (!inputTextValue) {
    return true;
  }

  const hashtags = inputTextValue.split(/\s+/);

  if (hashtags.some((hashtag) => hashtag[0] !== '#' && hashtag[0].length !== 0)) {
    errorMessage = 'Хэштег начинается с символа \'#\'';
    return false;
  }
  if (hashtags.some((hashtag) => !/^#[a-zа-яё0-9]*$/i.test(hashtag))) {
    errorMessage = 'Строка должна состоять из букв и чисел, хэштеги разделяются пробелами';
    return false;
  }
  if (hashtags.some((hashtag) => hashtag === '#')) {
    errorMessage = 'Хеш-тег не может состоять только из одной решётки';
    return false;
  }
  if (hashtags.some((hashtag) => hashtag.length >= MAX_QUANTITY_SIMBOL)) {
    errorMessage = `Максимальная длина одного хэштега ${MAX_QUANTITY_SIMBOL} символов, включая решётку`;
    return false;
  }
  if (hashtags.length > MAX_QUANTITY_HASHTAG) {
    errorMessage = `Максимальное количество хештегов ${MAX_QUANTITY_HASHTAG}`;
    return false;
  }
  if (hashtags.length !== new Set(hashtags).size) {
    errorMessage = 'Один и тот же хештег не может быть использован дважды';
    return false;
  }
  return true;
};
pristine.addValidator(hashtagInput, isHashtagsValid, showEror);
export{pristine};
