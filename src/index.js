import './styles.css';
import debounce from 'lodash.debounce';
import onSearchFormHandler from './js/searchFormHandler';

const refs = {
  searchForm: document.querySelector('.js-search-form'),
};

refs.searchForm.addEventListener('submit', event => {
  event.preventDefault();
});

refs.searchForm.addEventListener(
  'input',
  debounce(event => {
    onSearchFormHandler(event);
  }, 500),
);
