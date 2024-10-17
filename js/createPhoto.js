import {getRandomArrayElement, getRandomInteger} from './utils.js';
import {DESCRIPTION,LIKES_MIN,LIKES_MAX,COMMENTS_MIN,COMMENTS_MAX} from './constants.js';
import {generateComment} from './generateComment.js';
let photoIdx = 0;

function createPhoto() {
  const description = getRandomArrayElement(DESCRIPTION);
  const likes = getRandomInteger(LIKES_MIN, LIKES_MAX);
  const commentsCount = getRandomInteger(COMMENTS_MIN, COMMENTS_MAX);
  const existingCommentIds = [];
  const comments = Array.from({ length: commentsCount }, () => generateComment(existingCommentIds));

  return {
    id: ++photoIdx,
    url: `photos/${(photoIdx)}.jpg`,
    description,
    likes,
    comments,
  };
}
export{createPhoto};
