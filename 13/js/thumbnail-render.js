import {getFetchUrl} from './get-data.js';
const template = document.querySelector('#picture').content.querySelector('.picture');
const thumbnailsContainer = document.querySelector('.pictures');

const createThumbnail = ({id, url, description, comments, likes}) => {
  const thumbnail = template.cloneNode(true);
  const image = thumbnail.querySelector('.picture__img');

  thumbnail.dataset.photoId = id;
  image.src = url;
  image.alt = description;

  thumbnail.querySelector('.picture__comments').textContent = comments.length;
  thumbnail.querySelector('.picture__likes').textContent = likes;
  thumbnail.classList.add('thumbnail');
  return thumbnail;
};

const removeThumbnails = () => {
  const existingThumbnails = thumbnailsContainer.querySelectorAll('.thumbnail');
  existingThumbnails.forEach((thumbnail) => thumbnail.remove());
};

const fragment = document.createDocumentFragment();

const renderThumbnails = (photos)=>{
  removeThumbnails();
  photos.forEach((photo) => {
    const thumbnail = createThumbnail(photo);
    fragment.appendChild(thumbnail);
  });
  thumbnailsContainer.append(fragment);
};
getFetchUrl(renderThumbnails);
export {thumbnailsContainer, renderThumbnails};
