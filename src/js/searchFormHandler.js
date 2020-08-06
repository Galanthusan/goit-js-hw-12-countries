import fetchCountries from './fetchCountries';
import updateCountriesMarkup from './updateCountriesMarkup';
import updateCountriesListMarkup from './updateCountryListMarkup';

const refs = {
  countriesContainer: document.querySelector('.js-countries'),
};

function onSearchFormHandler(event) {
  const inputValue = event.target.value;
  refs.countriesContainer.innerHTML = '';
  fetchCountries(inputValue).then(data => {
    if (data && data.length >= 2 && data.length <= 10) {
      updateCountriesListMarkup(data);
    } else if (data && data.length === 1) {
      updateCountriesMarkup(data);
    } else if (data && data.length > 10) {
      toastr.error(
        'Too many matches found. Please enter a more spicific query!',
      );
    } else if (data && !data) {
      return;
    } else {
      toastr.error('No matches found!');
    }
  });
}

export default onSearchFormHandler;
