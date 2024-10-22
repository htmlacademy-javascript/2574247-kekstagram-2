import { getRandomInteger} from './utils.js';
import {DESCRIPTION,LIKES_MIN,LIKES_MAX,COMMENTS_MIN,COMMENTS_MAX} from './constants.js';
import {generateComment} from './generateComment.js';
let idx = 0;

function createPhoto() {
  const likes = getRandomInteger(LIKES_MIN, LIKES_MAX);
  const commentsCount = getRandomInteger(COMMENTS_MIN, COMMENTS_MAX);
  const existingCommentIds = [];
  const comments = Array.from({ length: commentsCount }, () => generateComment(existingCommentIds));

  return {
    id: ++idx,
    url: `photos/${(idx)}.jpg`,
    description: DESCRIPTION[idx - 1],
    likes,
    comments,
  };
}
export{createPhoto};
