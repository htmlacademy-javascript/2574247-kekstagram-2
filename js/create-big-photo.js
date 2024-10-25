import { thumbnailsContainer } from './thumbnail-render.js';
import { mockedPhotos } from './data.js';

const bigPicture = document.querySelector ('.big-picture');
const bigPictureCancel = bigPicture.querySelector('.big-picture__cancel');
const bigPictureImg = bigPicture.querySelector('.big-picture__img img');
const socialCaption = bigPicture.querySelector('.social__caption');
const likesCount = bigPicture.querySelector('.likes-count');
const commentTotalCount = bigPicture.querySelector('.social__comment-total-count');
const shownCommentCount = bigPicture.querySelector('.social__comment-shown-count');
const socialCommentsTemplate = document.querySelector('.social__comments');
const socialCommentsLoader = document.querySelector('.comments-loader');

let shownCommentCountText = 5;
let comments = [];

function renderComments() {
  const totalComments = comments.length;
  const currentCount = Math.min(shownCommentCountText, totalComments);

  shownCommentCount.textContent = currentCount;
  socialCommentsTemplate.replaceChildren();
  const currentPhotoComments = comments.slice(0, currentCount).map(({ avatar, name, message }) => `
    <li class="social__comment">
      <img class="social__picture" src="${avatar}" alt="${name}" width="35" height="35">
      <p class="social__text">${message}</p>
    </li>`).join('');
  socialCommentsTemplate.insertAdjacentHTML('beforeEnd', currentPhotoComments);
}

function onLoadMoreComments() {
  shownCommentCountText += 5;
  if (shownCommentCountText >= comments.length) {
    shownCommentCountText = comments.length;
    socialCommentsLoader.classList.add('hidden');
  }
  renderComments();
}

const openFullPhoto = (photoId) => {
  bigPicture.classList.remove('hidden');
  const currentPhoto = mockedPhotos.find((mockedPhoto) => mockedPhoto.id === +photoId);

  const { url, description, likes } = currentPhoto;

  bigPictureImg.src = url;
  socialCaption.textContent = description;
  likesCount.textContent = likes;
  commentTotalCount.textContent = currentPhoto.comments.length;
  socialCommentsTemplate.innerHTML = '';

  comments = currentPhoto.comments;
  shownCommentCountText = 5;

  renderComments();
  if(+shownCommentCount.textContent !== comments.length){
    socialCommentsLoader.classList.remove('hidden');
  }else{
    socialCommentsLoader.classList.add('hidden');
  }
  document.body.classList.add('modal-open');
  socialCommentsLoader.addEventListener('click', onLoadMoreComments);
  document.addEventListener('keydown', onBigPhotoEscKeydown);
};

thumbnailsContainer.addEventListener('click', (evt) => {
  const currentPhotoNode = evt.target.closest('.picture');
  if (currentPhotoNode) {
    openFullPhoto(currentPhotoNode.dataset.photoId);
  }

});

bigPictureCancel.addEventListener('click', onCloseBigPhoto);

function onCloseBigPhoto() {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
  socialCommentsLoader.removeEventListener('click', onLoadMoreComments);
  document.removeEventListener('keydown', onBigPhotoEscKeydown);
}

function onBigPhotoEscKeydown(evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    onCloseBigPhoto();
  }
}
