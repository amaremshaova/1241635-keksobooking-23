import {validationTitleInput} from './validation-title.js';
import {changePlaceholderPriceInput} from './change-placeholder-price.js';
import {validationPriceInput} from './validation-price.js';
import {validationNumberRoomSelect} from './validation-room-number.js';
import {validationTimeSelect} from './validation-time.js';

const titleInput = document.querySelector('#title');
const priceInput = document.querySelector('#price');
const typeSelect = document.querySelector('#type');
const roomNumberSelect = document.querySelector('#room_number');
const capacitySelect = document.querySelector('#capacity');
const timeInSelect = document.querySelector('#timein');
const timeOutSelect = document.querySelector('#timeout');

timeInSelect.addEventListener('change', (evt) => {
  validationTimeSelect(evt, timeInSelect, timeOutSelect);
});

timeOutSelect.addEventListener('change', (evt) => {
  validationTimeSelect(evt,timeInSelect, timeOutSelect);
});


titleInput.addEventListener('input', () => {
  validationTitleInput(titleInput);
});

typeSelect.addEventListener('change', () => {
  changePlaceholderPriceInput(priceInput, typeSelect);
});

roomNumberSelect.addEventListener('change', () => {
  validationNumberRoomSelect(roomNumberSelect, capacitySelect);
});

capacitySelect.addEventListener('change', () => {
  validationNumberRoomSelect(roomNumberSelect, capacitySelect);
});

priceInput.addEventListener('input', () => {
  validationPriceInput(priceInput, typeSelect);
});
