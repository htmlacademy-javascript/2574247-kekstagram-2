import {closePhotoEditor} from './upload-form';
import {isEscapeKey} from './utils.js';
import {pristine} from './validate.js';
const body = document.querySelector('body');
const successTemplate = document.querySelector('#success').content.querySelector('.success');
const errorTemplate = document.querySelector('#error').content.querySelector('.error');
const uploadForm = document.querySelector('.img-upload__form');
const uploadSubmitBtn = uploadForm.querySelector('.img-upload__submit');
const SEND_URL = 'https://31.javascript.htmlacadem.pro/kekstagram';

const isDisabledSubmitBtn = () => {
  uploadSubmitBtn.disabled = true;
};
const isRemoveDisabledSubmitBtn = () => {
  uploadSubmitBtn.disabled = false;
};

const removeMessage = () => {
  const successMessage = document.querySelector('.success');
  if(successMessage){
    successMessage.remove();
  }
};

const removeErrorMessage = (evt) => {
  const errorMessage = document.querySelector('.error');
  if(errorMessage){
    errorMessage.remove();
    evt.stopPropagation();
  }
//  document.removeEventListener('keydown', onErrorTemplat eKeydown)
};

const onBodyKeydown = (evt)=>{
  if(isEscapeKey(evt)){
    removeMessage();
  }
  body.removeEventListener('keydown', onBodyKeydown);
};

const onErrorTemplateKeydown = (evt)=>{
  if(isEscapeKey(evt)){
    removeErrorMessage(evt);
  }
  //template.removeEventListener('keydown', onBodyKeydown);
};

const showErrorMessage = () =>{
  const template = errorTemplate.cloneNode(true);
  body.append(template);
  const errorButton = template.querySelector('.error__button');
  if(errorButton){
    errorButton.addEventListener('click', removeErrorMessage);
    template.addEventListener('click', removeErrorMessage);
    body.addEventListener('keydown', onErrorTemplateKeydown);
  }
};

const showSuccessMessage = () => {
  const template = successTemplate.cloneNode(true);
  body.append(template);
  const successButton = template.querySelector('.success__button');
  if(successButton){
    successButton.addEventListener('click', removeMessage);
    template.addEventListener('click', removeMessage);
    body.addEventListener('keydown', onBodyKeydown);
  }
};

uploadForm.addEventListener('submit', (evt)=>{
  evt.preventDefault();
  const isValid = pristine.validate();
  if(!isValid) {
    return;
  }
  const formData = new FormData(evt.target);
  isDisabledSubmitBtn();
  fetch(
    SEND_URL,
    {
      method: 'post',
      body: formData,
    },
  ).then((response)=>{
    if(!response.ok){
      throw new Error('Network response was not ok');
    }else{
      showSuccessMessage();
      closePhotoEditor();
    }
  })
    .catch(() => {
      showErrorMessage();
    })
    .finally(()=>{
      isRemoveDisabledSubmitBtn();
    });
});

