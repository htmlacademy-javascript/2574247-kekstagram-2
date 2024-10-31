import {isEscapeKey} from './utils.js';

const pageBody = document.querySelector('body');
const uploadForm = document.querySelector('.img-upload__form');
const hashtagInput = uploadForm.querySelector('.text__hashtags');
const uploadFileControl = uploadForm.querySelector('#upload-file');
const photoEditorForm = uploadForm.querySelector('.img-upload__overlay');
const photoEditorResetBtn = photoEditorForm.querySelector('#upload-cancel');
const commentInput = uploadForm.querySelector('.text__description');

const onPhotoEditorResetBtnClick = () => closePhotoEditor();

const onDocumentKeydown = (evt) => {
  if(isEscapeKey(evt)){
    evt.preventDefault();
    if(document.activeElement === hashtagInput || document.activeElement === commentInput){
      evt.stopPropagation();
    }else{
      uploadForm.reset();
      closePhotoEditor();
    }
  }
};

function closePhotoEditor(){
  photoEditorForm.classList.add('hidden');
  pageBody.classList.remove('.modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
  photoEditorResetBtn.removeEventListener('click', onPhotoEditorResetBtnClick);
  uploadFileControl.value = '';
  uploadForm.reset();
}

uploadFileControl.addEventListener('change', ()=>{
  photoEditorForm.classList.remove('hidden');
  pageBody.classList.add('.modal-open');
  photoEditorResetBtn.addEventListener('click', onPhotoEditorResetBtnClick);
  document.addEventListener('keydown', onDocumentKeydown);
});
