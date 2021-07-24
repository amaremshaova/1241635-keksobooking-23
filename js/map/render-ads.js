import {setTypeHouse} from '../set-type-house.js';
import {map} from './init-map.js';
import { IconData } from './init-map.js';

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner'];

const ADS_COUNT = 10;
const DEFAULT_VALUE = 'any';
const markersArray = new Array();
const markersGroup = L.layerGroup().addTo(map);

const filtersForm = document.querySelector('.map__filters');
const typeInput = filtersForm.querySelector('[name="type-filter"]');
const priceMinInput = filtersForm.querySelector('[name="price-min-filter"]');
const priceMaxInput = filtersForm.querySelector('[name="price-max-filter"]');
const roomsInput = filtersForm.querySelector('[name="rooms-filter"]');
const guestsInput = filtersForm.querySelector('[name="guests-filter"]');

const wifiInput = filtersForm.querySelector('[name="wifi-filter"]');
const dishwasherInput = filtersForm.querySelector('[name="dishwasher-filter"]');
const parkingInput = filtersForm.querySelector('[name="parking-filter"]');
const washerInput = filtersForm.querySelector('[name="washer-filter"]');
const elevatorInput = filtersForm.querySelector('[name="elevator-filter"]');
const conditionerInput = filtersForm.querySelector('[name="conditioner-filter"]');

const useFilters = (ads) => ads.filter((ad) =>
  (ad.offer.type === typeInput.value || typeInput.value === DEFAULT_VALUE) &&
  (ad.offer.price >= Number(priceMinInput.value) && ad.offer.price <= Number(priceMaxInput.value)) &&
  (ad.offer.rooms === Number(roomsInput.value) ||  roomsInput.value === DEFAULT_VALUE) &&
  (ad.offer.guests === Number(guestsInput.value) || guestsInput.value === DEFAULT_VALUE) &&
  ((ad.offer.features !== undefined) &&
  ((wifiInput.value === DEFAULT_VALUE || ad.offer.features.indexOf(wifiInput.value) !== -1) &&
  (dishwasherInput.value === DEFAULT_VALUE || ad.offer.features.indexOf(dishwasherInput.value) !== -1) &&
  (washerInput.value === DEFAULT_VALUE || ad.offer.features.indexOf(washerInput.value) !== -1) &&
  (parkingInput.value === DEFAULT_VALUE || ad.offer.features.indexOf(parkingInput.value) !== -1) &&
  (elevatorInput.value === DEFAULT_VALUE || ad.offer.features.indexOf(elevatorInput.value) !== -1) &&
  (conditionerInput.value === DEFAULT_VALUE || ad.offer.features.indexOf(conditionerInput.value) !== -1))));


const createPopup = (author, offer) => {
  const cardTemplate = document.querySelector('#card').content.querySelector('article');
  const cardElement = cardTemplate.cloneNode(true);
  cardElement.querySelector('.popup__title').textContent = offer.title;
  cardElement.querySelector('.popup__text--address').textContent = offer.address;
  cardElement.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`;
  cardElement.querySelector('.popup__type').textContent = setTypeHouse(offer.type);
  cardElement.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
  cardElement.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin} , выезд до ${offer.checkout}`;
  cardElement.querySelector('.popup__description').textContent = offer.description;


  if (offer.features !== undefined){
    for (let index = 0; index < FEATURES.length; index++){
      const isExistFeature = offer.features.some((element) => element === FEATURES[index]);

      if (!isExistFeature) {
        cardElement.querySelector(`.popup__feature--${FEATURES[index]}`).classList.add('hidden');
      }
    }
  } else {
    for (let index = 0; index < FEATURES.length; index++){
      cardElement.querySelector(`.popup__feature--${FEATURES[index]}`).classList.add('hidden');
    }
  }

  if (offer.photos !== undefined){
    cardElement.querySelector('.popup__photo').src = offer.photos[0];

    for (let index = 1; index < offer.photos.length; index++){
      const photoImg = cardElement.querySelector('.popup__photo').cloneNode(true);
      photoImg.src = offer.photos[index];
      cardElement.querySelector('.popup__photos').appendChild(photoImg);
    }
  }

  cardElement.querySelector('.popup__avatar').src = author.avatar;

  return cardElement;
};

const createMarker = (location, popup) => {
  const lat = location.lat;
  const lng = location.lng;

  const icon = L.icon({
    iconUrl: IconData.URL,
    iconSize: IconData.SIZE_VALUES,
    iconAnchor: IconData.ANCHOR_COORDS,
  });

  const adMarker = L.marker(
    {
      lat,
      lng,
    },
    {
      icon,
    },
  );

  adMarker.bindPopup(popup);

  return adMarker;

};


const renderAdList = (ads) =>{
  markersArray.splice(0, ADS_COUNT - 1);
  markersGroup.clearLayers();

  useFilters(ads).slice(0, ADS_COUNT).forEach(({author, location, offer}) => {
    const cardElement = createPopup(author, offer);
    const adMarker = createMarker(location, cardElement);
    adMarker.addTo(markersGroup);
  });
};

export {renderAdList};
