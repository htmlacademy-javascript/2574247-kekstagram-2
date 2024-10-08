import {getRandomArrayElement, getRandomInteger} from './utils.js';
import {DESCRIPTION,LIKES_MIN,LIKES_MAX,COMMENTS_MIN,COMMENTS_MAX,PHOTO_INDEX_MIN, PHOTO_INDEX_MAX} from './constants.js';
import {generateComment} from './generateComment.js';

function generatePhoto() {
  const description = getRandomArrayElement(DESCRIPTION);
  const likes = getRandomInteger(LIKES_MIN, LIKES_MAX);
  const commentsCount = getRandomInteger(COMMENTS_MIN, COMMENTS_MAX);
  const existingCommentIds = [];
  const comments = Array.from({ length: commentsCount }, () => generateComment(existingCommentIds));
  const randomPhotoIndex = getRandomInteger(PHOTO_INDEX_MIN, PHOTO_INDEX_MAX);

  return {
    url: `img/photos/${randomPhotoIndex}.jpg`, // Используем случайный индекс
    description,
    likes,
    comments,
  };
}
export{generatePhoto};
