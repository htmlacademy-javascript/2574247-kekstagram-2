import {containerThumbnails} from './thumbnailRender';
import { mockedPhotos } from './data';

const bigPicture = document.querySelector('.big-picture');
const bigPictureCancel = bigPicture.querySelector('.big-picture__cancel');
const bigPictureImg = bigPicture.querySelector('.big-picture__img img');
const socialCaption = bigPicture.querySelector('.social__caption');
const likesCount = bigPicture.querySelector('.likes-count');
const socialCommentTotalCount = bigPicture.querySelector('.social__comment-total-count');


containerThumbnails.addEventListener('click', (evt) =>{
  const currentPhotoNode = evt.target.closest('.picture');
  if(currentPhotoNode){
    openFullPhoto(currentPhotoNode.dataset.photoId);
  }
});

function openFullPhoto(photoId){
  bigPicture.classList.remove('hidden');
  const currentPhoto = mockedPhotos.find((mockedPhoto) => mockedPhoto.id === +photoId);

  bigPictureImg.src = currentPhoto.url;
  socialCaption.textContent = currentPhoto.description;
  likesCount.textContent = currentPhoto.likes;
  socialCommentTotalCount.textContent = currentPhoto.comments.length;
  console.log('bp', bigPictureImg.src);
}

bigPictureCancel.addEventListener('click',() =>{
  bigPicture.classList.add('hidden');
});


