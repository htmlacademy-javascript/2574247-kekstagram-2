import {thumbnailsContainer} from './thumbnail-render';
import { mockedPhotos } from './data';

const bigPicture = document.querySelector('.big-picture');
const bigPictureCancel = bigPicture.querySelector('.big-picture__cancel');
const bigPictureImg = bigPicture.querySelector('.big-picture__img img');
const socialCaption = bigPicture.querySelector('.social__caption');
const likesCount = bigPicture.querySelector('.likes-count');
const socialCommentTotalCount = bigPicture.querySelector('.social__comment-total-count');
const socialCommentsTemplate = document.querySelector('.social__comments');
const socialCommentsLoader = document.querySelector('.comments-loader');
const socialCommentCount = document.querySelector('.social__comment-count');

const openFullPhoto = (photoId) => {
  bigPicture.classList.remove('hidden');
  const currentPhoto = mockedPhotos.find((mockedPhoto) => mockedPhoto.id === +photoId);

  const {url, description, likes, comments} = currentPhoto;

  bigPictureImg.src = url;
  socialCaption.textContent = description;
  likesCount.textContent = likes;
  socialCommentTotalCount.textContent = comments.length;
  socialCommentsTemplate.innerHTML = '';
  const currentPhotoComments = comments.map(({avatar, name, message}) => `
   <li class="social__comment">
      <img class="social__picture" src="${avatar}" alt="${name}" width="35" height="35">
      <p class="social__text">${message}</p>
  </li>`).join('');
  socialCommentsTemplate.insertAdjacentElement(currentPhotoComments);
  bigPicture.querySelector('.social__caption').textContent = description;
  document.body.classList.add('modal-open');
};

thumbnailsContainer.addEventListener('click', (evt) => {
  const currentPhotoNode = evt.target.closest('.picture');
  if(currentPhotoNode){
    openFullPhoto(currentPhotoNode.dataset.photoId);
  }
});

socialCommentCount.classList.add('hidden');
socialCommentsLoader.classList.add('hidden');

bigPictureCancel.addEventListener('click',() => {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
});

document.addEventListener('keydown',((evt) => {
  if(evt.key === 'Escape'){
    evt.preventDefault();
    bigPicture.classList.add('hidden');
  }
}));
