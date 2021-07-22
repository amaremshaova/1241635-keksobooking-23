import {errorGetData} from './user-modal/modal.js';

const Url = {
  SERVER: 'https://23.javascript.pages.academy/keksobooking',
  DATA: 'https://23.javascript.pages.academy/keksobooking/data',
};

const getData = (onSuccess) => {
  fetch(Url.DATA)
    .then((response) => {
      if (response.ok){
        return response;
      }
      throw new Error(`${response.status} — ${response.statusText}`);
    })
    .then((response) => response.json())
    .then((ads) => onSuccess(ads))
    .catch((errorMessage) => errorGetData(errorMessage));
};

const sendData = (onSuccess, onFail, body) => {

  fetch(
    Url.SERVER,
    {
      method: 'POST',
      body: body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail();
      }
    })
    .catch(() => {
      onFail();
    });
};

export {getData, sendData};
