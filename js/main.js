import {generatePhoto} from './generatePhoto';
import {NUMBER_OF_PHOTOS} from './constants';


function getSimilarPhotos(){
  const similarPhotos = Array.from({ length: NUMBER_OF_PHOTOS }, generatePhoto);
  return similarPhotos;
}
console.log(getSimilarPhotos());

