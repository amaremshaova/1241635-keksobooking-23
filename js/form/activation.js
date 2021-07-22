const adForm = document.querySelector('.ad-form');
const filtersForm = document.querySelector('.map__filters');

const setFormsInactive = () => {
  adForm.classList.add('ad-form--disabled');
  adForm.querySelectorAll('fieldset').disabled = true;

  filtersForm.classList.add('map__filters--disabled');
  filtersForm.querySelectorAll('select').disabled = true;
  filtersForm.querySelector('fieldset').disabled = true;
};

const setFormsActive = () => {
  adForm.classList.remove('ad-form--disabled');
  adForm.querySelectorAll('fieldset').disabled = false;

  filtersForm.classList.remove('map__filters--disabled');
  filtersForm.querySelectorAll('select').disabled = false;
  filtersForm.querySelector('fieldset').disabled = false;
};

setFormsInactive();
export {setFormsActive};
