const ALERT_SHOW_TIME = 5000;
const successModal = document.querySelector('#success').content.querySelector('.success');
const errorModal = document.querySelector('#error').content.querySelector('.error');
const errorButton =document.querySelector('#error').content.querySelector('.error__button');

const isEscEvent = (evt) => evt.key === 'Escape' || evt.key === 'Esc';

let closeSuccessModal = () =>{};
let closeErrorModal = () => {};
let openErrorModal = () => {};
let openSuccessModal = () => {};

const onSuccessModalEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    closeSuccessModal();
  }
};

const onErrorModalEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    closeErrorModal();
  }
};

const onSuccessModalCloseClick = () => {
  closeSuccessModal();
};

const onErrorModalCloseClick = () => {
  closeErrorModal();
};

const onButtonCloseClick = () => {
  closeErrorModal();
};


openErrorModal = () => {
  if (errorModal)  {
    errorModal.classList.remove('hidden');

    document.addEventListener('keydown', onErrorModalEscKeydown);
    errorModal.addEventListener('click', onErrorModalCloseClick);
    errorButton.addEventListener('ckick', onButtonCloseClick);
  }
};

closeErrorModal = () => {
  if (errorModal) {
    errorModal.classList.add('hidden');

    document.removeEventListener('keydown', onErrorModalEscKeydown);
    errorModal.removeEventListener('click', onErrorModalCloseClick);
    errorButton.removeEventListener('ckick', onButtonCloseClick);
  }
};


openSuccessModal = () => {
  if (successModal)  {
    successModal.classList.remove('hidden');

    document.addEventListener('keydown', onSuccessModalEscKeydown);
    successModal.addEventListener('click', onSuccessModalCloseClick);
  }
};

closeSuccessModal = () => {
  if (successModal) {
    successModal.classList.add('hidden');
    document.removeEventListener('keydown', onSuccessModalEscKeydown);
    successModal.removeEventListener('click', onSuccessModalCloseClick);
  }
};

const errorGetData = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

document.body.appendChild(successModal).classList.add('hidden');
document.body.appendChild(errorModal).classList.add('hidden');

export {openSuccessModal, openErrorModal, errorGetData};
