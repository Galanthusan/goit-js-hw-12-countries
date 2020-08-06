import countriesListTemplate from '../templates/countriesList.hbs';

const refs = {
  countriesContainer: document.querySelector('.js-countries'),
};

function updateCountriesListMarkup(countries) {
  const markup = countriesListTemplate(countries);
  refs.countriesContainer.insertAdjacentHTML('beforeend', markup);
}

export default updateCountriesListMarkup;
