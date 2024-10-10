import {generatePhoto} from './generatePhoto.js';
import {NUMBER_OF_PHOTOS} from './constants.js';


function getSimilarPhotos(){
  const similarPhotos = Array.from({ length: NUMBER_OF_PHOTOS }, generatePhoto);
  return similarPhotos;
}
getSimilarPhotos();

