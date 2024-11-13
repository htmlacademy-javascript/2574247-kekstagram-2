import {body} from './upload-form.js';
const dataError = document.querySelector('#data-error').content.querySelector('.data-error');
const imgFilters = document.querySelector('.img-filters');
const GET_URL = 'https://32.javascript.htmlacademy.pro/kekstagram/data';
const ERROR_DELAY = 5000;

imgFilters.classList.remove('img-filters--inactive');
const showErrorMessage = () => {
  const template = dataError.cloneNode(true);
  body.append(template);
  setTimeout(()=>{
    template.remove();
  },ERROR_DELAY);
};

const getFetchUrl = (foo) => {
  fetch(GET_URL)
    .then((response) => {
      if(!response.ok){
        throw new Error('Network response was not ok');
      }else{
        return response.json();
      }
    })
    .then((photos) => {
      foo(photos);
      imgFilters.classList.remove('img-filters--inactive');
    }
    )
    .catch(()=> showErrorMessage());
};
export {getFetchUrl};

