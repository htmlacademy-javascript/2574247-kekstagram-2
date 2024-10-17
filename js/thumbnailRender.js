import { mockedPhotos } from './data.js';
console.log(mockedPhotos);
const template = document.querySelector('#picture').content.querySelector('.picture');
const containerThumbnails = document.querySelector('.pictures');

const createThumbnail = (photo) => {
  const thumbnail = template.cloneNode(true);
  const image = thumbnail.querySelector('.picture__img');

  thumbnail.dataset.photoId = photo.id;

  image.src = photo.url;
  image.alt = photo.description;

  thumbnail.querySelector('.picture__comments').textContent = photo.comments.length;
  thumbnail.querySelector('.picture__likes').textContent = photo.likes;
  return thumbnail;
};

const fragment = document.createDocumentFragment();

mockedPhotos.forEach((photo) => {
  const thumbnail = createThumbnail(photo);
  fragment.appendChild(thumbnail);
});

containerThumbnails.append(fragment);
export {containerThumbnails};
