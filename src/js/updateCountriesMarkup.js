import countriesTemplate from '../templates/countries.hbs';

const refs = {
  countriesContainer: document.querySelector('.js-countries'),
};

function updateCountriesMarkup(countries) {
  const markup = countriesTemplate(countries);
  refs.countriesContainer.insertAdjacentHTML('beforeend', markup);
}

export default updateCountriesMarkup;
