import {checkValidationTitleInput} from './validation-title.js';
import {changePlaceholderPriceInput} from './change-placeholder-price.js';
import {checkValidationPriceInput} from './validation-price.js';
import {checkValidationNumberRoomSelect} from './validation-room-number.js';
import {checkValidationTimeSelect} from './validation-time.js';

const titleInput = document.querySelector('#title');
const priceInput = document.querySelector('#price');
const typeSelect = document.querySelector('#type');
const roomNumberSelect = document.querySelector('#room_number');
const capacitySelect = document.querySelector('#capacity');
const timeInSelect = document.querySelector('#timein');
const timeOutSelect = document.querySelector('#timeout');

timeInSelect.addEventListener('change', (evt) => {
  checkValidationTimeSelect(evt, timeInSelect, timeOutSelect);
});

timeOutSelect.addEventListener('change', (evt) => {
  checkValidationTimeSelect(evt,timeInSelect, timeOutSelect);
});


titleInput.addEventListener('input', () => {
  checkValidationTitleInput(titleInput);
});

typeSelect.addEventListener('change', () => {
  changePlaceholderPriceInput(priceInput, typeSelect);
});

roomNumberSelect.addEventListener('change', () => {
  checkValidationNumberRoomSelect(roomNumberSelect, capacitySelect);
});

capacitySelect.addEventListener('change', () => {
  checkValidationNumberRoomSelect(roomNumberSelect, capacitySelect);
});

priceInput.addEventListener('input', () => {
  checkValidationPriceInput(priceInput, typeSelect);
});
