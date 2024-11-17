import {closePhotoEditor} from './upload-form';
import {isEscapeKey} from './utils.js';
import {pristine} from './validate.js';
import {body} from './upload-form.js';
import {uploadForm} from './upload-form.js';
const successTemplate = document.querySelector('#success').content.querySelector('.success');
const errorTemplate = document.querySelector('#error').content.querySelector('.error');
const uploadSubmitBtn = uploadForm.querySelector('.img-upload__submit');
const SEND_URL = 'https://32.javascript.htmlacademy.pro/kekstagram';

const isDisabledSubmitBtn = () => {
  uploadSubmitBtn.disabled = true;
};
const isRemoveDisabledSubmitBtn = () => {
  uploadSubmitBtn.disabled = false;
};

const removeMessage = (evt) => {
  const errorMessage = document.querySelector('.error');
  const successMessage = document.querySelector('.success');
  if(successMessage) {
    successMessage.remove();
  }else{
    errorMessage.remove(evt);
    evt.stopPropagation();
  }
};

const onBodyKeydown = (evt)=>{
  if(isEscapeKey(evt)){
    removeMessage();
  }
  body.removeEventListener('keydown', onBodyKeydown);
};

const showErrorMessage = () =>{
  const template = errorTemplate.cloneNode(true);
  body.append(template);
  const errorButton = template.querySelector('.error__button');
  if(errorButton){
    template.addEventListener('click', removeMessage);
    body.addEventListener('keydown', onBodyKeydown);
  }
};

const showSuccessMessage = () => {
  const template = successTemplate.cloneNode(true);
  body.append(template);
  const successButton = template.querySelector('.success__button');

  closePhotoEditor();
  if(successButton){
    template.addEventListener('click', removeMessage);
    body.addEventListener('keydown', onBodyKeydown);
  }
};

uploadForm.addEventListener('submit', (evt)=>{
  evt.preventDefault();
  if(!pristine.validate()) {
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
    }
  })
    .catch(() => {
      showErrorMessage();
    })
    .finally(()=>{
      isRemoveDisabledSubmitBtn();
    });
});

