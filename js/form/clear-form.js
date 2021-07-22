import {map, marker, INIT_COORDS, ZOOM_NUMBER} from '../map/init-map.js';
import {MinPriceValues} from './validation-price.js';
import {addAddress} from './add-address.js';


const resetButton = document.querySelector('.ad-form__reset');
const adForm = document.querySelector('.ad-form');
const priceInput = document.querySelector('#price');
const previewPhotoHouse = document.querySelector('.ad-form__photo img');
const previewAvatar = document.querySelector('.ad-form-header__preview img');

const clearForm = () => {
  adForm.reset();
  marker.setLatLng(INIT_COORDS);
  map.setView({
    lat: INIT_COORDS.lat,
    lng: INIT_COORDS.lng,
  }, ZOOM_NUMBER);
  addAddress(marker.getLatLng());

  priceInput.placeholder = MinPriceValues.MIN_PRICE_FLAT;
  previewPhotoHouse.src = 'img/muffin-grey.svg';
  previewAvatar.src = 'img/muffin-grey.svg';
};

resetButton.addEventListener('click', () => {
  clearForm();
});

export {clearForm};


