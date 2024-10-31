const uploadForm = document.querySelector('.img-upload__form');
const hashtagInput = uploadForm.querySelector('.text__hashtags');
const commentInput = uploadForm.querySelector('.text__description');

const MAX_QUANTITY_HASHTAG = 5;
const MAX_QUANTITY_SIMBOLS = 20;
const MAX_COMMENTS_LENGTH = 140;

const pristine = new Pristine(uploadForm, {
  classTo: 'img-upload__form',
  errorTextParent: 'img-upload__field-wrapper ',
  errorTextClass: 'img-upload__field-wrapper--error',
});

let errorMessage = '';
const error = () => errorMessage;

const isCommentsValid = (value) => {
  errorMessage = '';
  if(value.trim().length >= MAX_COMMENTS_LENGTH){
    errorMessage = 'Длина комментариев не может составлять больше 140 символов';
  }
};
pristine.addValidator(commentInput, isCommentsValid, error);

const isHashtagsValid = (value) => {
  errorMessage = '';
  const inputText = value.toLowerCase().trim();

  if(!inputText){
    return true;
  }
  const hashtags = inputText.split(/\s+/);
  const rules = [
    {
      check: hashtags.some((hashtag) => hashtag[0] !== '#' && hashtag[0].length !== 0),
      error: 'Хэштег начинается с символа \'#\'',
    },
    {
      check: hashtags.some((hashtag) => !/^#[a-zа-яё0-9]*$/i.test(hashtag)),
      error: 'строка должна состоять из букв и чисел, хэштеги разделяются пробелами',
    },

    {
      check: hashtags.some((hashtag) => hashtag === '#'),
      error: 'хеш-тег не может состоять только из одной решётки',
    },
    {
      check: hashtags.some((hashtag) => hashtag.length >= MAX_QUANTITY_SIMBOLS),
      error: `максимальная длина одного хэштега ${MAX_QUANTITY_SIMBOLS} символов, включая решётку`,
    },
    {
      check: hashtags.length > MAX_QUANTITY_HASHTAG,
      error: `Максимальное количество хешетегов ${MAX_QUANTITY_HASHTAG}`,
    },
    {
      check: hashtags.length !== new Set(hashtags).size,
      error: 'Один и тот же хештег неможет быть использован дважды ',
    },
  ];

  return rules.every((rule) => {
    const isInvallid = rule.check;
    if(isInvallid){
      errorMessage = rule.error;
    }
    return !isInvallid;
  });
};

pristine.addValidator(hashtagInput, isHashtagsValid, error);

const onFormSubmit = (evt)=>{
  evt.preventDefault();
  if(pristine.validate()){
    hashtagInput.value = hashtagInput.value.trim().replaceAll(/\s+/g,' ');
    uploadForm.submit();
  }
};
uploadForm.addEventListener('submit', onFormSubmit);
