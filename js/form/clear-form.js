import {map, marker, INIT_COORDS, ZOOM_NUMBER} from '../map/init-map.js';
import {MinPriceValues} from './validation-price.js';


const PATH_IMG = 'img/muffin-grey.svg';

const resetButton = document.querySelector('.ad-form__reset');
const priceInput = document.querySelector('#price');
const previewPhotoHouse = document.querySelector('.ad-form__photo img');
const previewAvatar = document.querySelector('.ad-form-header__preview img');

const clearForm = () => {
  marker.setLatLng(INIT_COORDS);
  map.setView({
    lat: INIT_COORDS.lat,
    lng: INIT_COORDS.lng,
  }, ZOOM_NUMBER);


  priceInput.placeholder = MinPriceValues.MIN_PRICE_FLAT;
  previewPhotoHouse.src = PATH_IMG;
  previewAvatar.src = PATH_IMG;
};

resetButton.addEventListener('click', () => {
  clearForm();
});

export {clearForm};


