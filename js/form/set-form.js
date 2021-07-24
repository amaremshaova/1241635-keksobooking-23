import { clearForm } from './clear-form.js';

const adForm = document.querySelector('.ad-form');

const setAdFormSubmit = (sendData, onSuccessModalOpen, onErrorModalOpen) => {
  if (adForm) {
    adForm.addEventListener('submit', (evt) => {
      evt.preventDefault();

      sendData(
        () => onSuccessModalOpen(),
        () => onErrorModalOpen(),
        new FormData(adForm),
      );

      clearForm();
    });
  }
};

export {setAdFormSubmit};
