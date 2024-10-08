import { generateRandomId,getRandomInteger,getRandomArrayElement } from './utils.js';
import{AVATAR_MIN_INDEX, AVATAR_MAX_INDEX,MESSAGES,AUTORSNAME} from './constants.js';

function generateComment(existingIds) {
  const id = generateRandomId(existingIds);
  existingIds.push(id);
  return {
    id,
    avatar: `img/avatar/${getRandomInteger(AVATAR_MIN_INDEX, AVATAR_MAX_INDEX)}.svg`,
    message: getRandomArrayElement(MESSAGES),
    name: getRandomArrayElement(AUTORSNAME)
  };
}
export{generateComment};
