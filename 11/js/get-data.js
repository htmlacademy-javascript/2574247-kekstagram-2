const dataError = document.querySelector('#data-error').content.querySelector('.data-error');
const body = document.querySelector('body');
const BASE_URL = 'https://31.javascript.htmlacademy.pro/kekstagram/data';

const showErrorMessage = () => {
  const template = dataError.cloneNode(true);
  body.append(template);
  setTimeout(()=>{
    template.remove();
  },5000);
};

const getFetchUrl = (foo)=> {
  fetch(BASE_URL)
    .then((response)=> {
      if(!response.ok){
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((photos) => foo(photos))
    .catch(()=> showErrorMessage());
};
export {getFetchUrl};

