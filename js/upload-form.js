import {isEscapeKey} from './utils.js';
import {resetSlider}from './foto-effects-editor.js';
const imgUploadEffectLevel = document.querySelector('.img-upload__effect-level');
const body = document.querySelector('body');
const uploadForm = document.querySelector('.img-upload__form');
const hashtagInput = uploadForm.querySelector('.text__hashtags');
const uploadFileControl = uploadForm.querySelector('#upload-file');
const photoEditorForm = uploadForm.querySelector('.img-upload__overlay');
const photoEditorResetBtn = photoEditorForm.querySelector('#upload-cancel');
const commentInput = uploadForm.querySelector('.text__description');
const defaultPhoto = document.querySelector('.img-upload__preview img');
const fileSelector = uploadForm.querySelector('.img-upload__input');
const effectsPreview = uploadForm.querySelectorAll('.effects__preview');
const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png', 'webp'];

const isLoadPhoto = () => {
  const file = fileSelector.files[0];
  if (!file) {
    return;
  }
  const fileName = file.name.toLowerCase();
  const fileExt = fileName.split('.').pop();
  const matches = FILE_TYPES.includes(fileExt);
  if(matches){
    const url = URL.createObjectURL(file);
    defaultPhoto.src = url;
    effectsPreview.forEach((effect) => {
      effect.style.backgroundImage = `url(${url})`;
    });
  } else {
    onPhotoEditorClose();
  }
};

const onDocumentKeydown = (evt) => {
  if(isEscapeKey(evt)){
    evt.preventDefault();
    if(document.activeElement === hashtagInput || document.activeElement === commentInput){
      evt.stopPropagation();
    }else{
      onPhotoEditorClose();
      uploadForm.reset();
    }
  }
};

function onPhotoEditorClose(){
  photoEditorForm.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
  uploadFileControl.value = '';
  defaultPhoto.removeAttribute('style');
  resetSlider();
  uploadForm.reset();
}

const onUploadFormShow = ()=>{
  photoEditorForm.classList.remove('hidden');
  body.classList.add('modal-open');
  isLoadPhoto();
  imgUploadEffectLevel.classList.add('hidden');
  document.addEventListener('keydown', onDocumentKeydown);
};

uploadFileControl.addEventListener('change', onUploadFormShow);
photoEditorResetBtn.addEventListener('click', onPhotoEditorClose);

export{onPhotoEditorClose, body, uploadForm, defaultPhoto};
