import { getFetchUrl } from './get-data';
import { renderThumbnails } from './thumbnail-render';
import { debounce } from './utils.js';
import { DELAY } from './utils.js';

const ACTIVE_CLASS = 'img-filters__button--active';
const MAX_PICTURE_COUNT = 10;

const filterContainer = document.querySelector('.img-filters');
const filterButtonsElement = document.querySelector('.img-filters');
let activeFilter = 'filter-default';

const filterContainerRemoveHidden = () => {
  filterContainer.classList.remove('hidden');
};

const applyFilter = (photos) => {
  switch (activeFilter) {
    case 'filter-default':
      return photos;
    case 'filter-random':
      return photos.toSorted(() => 0.5 - Math.random())
        .slice(0, MAX_PICTURE_COUNT);
    case 'filter-discussed':
      return photos.toSorted((a, b) => b.comments.length - a.comments.length);
  }
};

const changeActiveFilter = (evt) => {
  const targetButton = evt.target.closest('button');
  const activeButton = document.querySelector(`.${ACTIVE_CLASS}`);
  if (!targetButton || activeButton === targetButton) {
    return;
  }
  activeButton.classList.remove(ACTIVE_CLASS);
  targetButton.classList.add(ACTIVE_CLASS);
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
export {filterContainer, filterContainerRemoveHidden};

