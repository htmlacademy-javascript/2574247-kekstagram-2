import {createPhoto} from './createPhoto.js';
import {NUMBER_OF_PHOTOS} from './constants.js';


//function getSimilarPhotos(){
const mockedPhotos = Array.from({ length: NUMBER_OF_PHOTOS }, createPhoto);

export{mockedPhotos};

