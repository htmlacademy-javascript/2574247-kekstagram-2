import { getFetchUrl } from './get-data';
import { renderThumbnails } from './thumbnail-render';
import { debounce } from './utils.js';
import { DELAY } from './constants.js';

const filterButtonsElement = document.querySelector('.img-filters');
const ACTIVE_CLASS = 'img-filters__button--active';
let activeFilter = 'filter-default';

const applyFilter = (photos) => {
  switch (activeFilter) {
    case 'filter-default':
      return photos;
    case 'filter-random':
      return photos.toSorted(() => 0.5 - Math.random()).slice(0, 10);
    case 'filter-discussed':
      return photos.toSorted((a, b) => b.comments.length - a.comments.length);
  }
};

const changeActiveFilter = (evt) => {
  const targetButton = evt.target;
  const activeButton = document.querySelector(`.${ACTIVE_CLASS}`);
  if (!targetButton.matches('button') || activeButton === targetButton) {
    return;
  }
  activeButton.classList.toggle(ACTIVE_CLASS);
  targetButton.classList.toggle(ACTIVE_CLASS);
  activeFilter = targetButton.getAttribute('id');
};

const onFilterChange = debounce((photos) => {
  const filteredPhotos = applyFilter(photos);
  renderThumbnails(filteredPhotos);
}, DELAY);

getFetchUrl((photos) => {
  filterButtonsElement.addEventListener('click', (evt) => {
    changeActiveFilter(evt);
    onFilterChange(photos);
  });
});


