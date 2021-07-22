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

let featuresArray = [];

const getFeaturesArray = () => {

  if (featuresArray.length !== 0){
    featuresArray = featuresArray.filter((elem, index) => index < 0);
  }

  if (wifiInput.checked){
    featuresArray.push('wifi');
  }
  else {
    if (featuresArray.includes('wifi')){
      featuresArray.splice(featuresArray.findIndex((el) => el === 'wifi'), 1);
    }
  }

  if (dishwasherInput.checked){
    featuresArray.push('dishwasher');
  }  else {
    if (featuresArray.includes('dishwasher')){
      featuresArray.splice(featuresArray.findIndex((el) => el === 'dishwasher'), 1);
    }
  }

  if (parkingInput.checked){
    featuresArray.push('parking');
  }else {
    if (featuresArray.includes('parking')){
      featuresArray.splice(featuresArray.findIndex((el) => el === 'parking'), 1);
    }
  }

  if (washerInput.checked){
    featuresArray.push('washer');
  } else {
    if (featuresArray.includes('washer')){
      featuresArray.splice(featuresArray.findIndex((el) => el === 'washer'), 1);
    }
  }

  if (elevatorInput.checked){
    featuresArray.push('elevator');
  }else {
    if (featuresArray.includes('elevator')){
      featuresArray.splice(featuresArray.findIndex((el) => el === 'elevator'), 1);
    }
  }

  if (conditionerInput.checked){
    featuresArray.push('conditioner');
  }else {
    if (featuresArray.includes('conditioner')){
      featuresArray.splice(featuresArray.findIndex((el) => el === 'conditioner'), 1);
    }
  }
};

const useFilters = (ads) => {

  let afterFilteringAdsArray = ads.filter((ad) =>
    ad.offer.type === typeInput.value || typeInput.value === DEFAULT_VALUE);

  afterFilteringAdsArray = afterFilteringAdsArray.filter((ad) =>
    ad.offer.price >= priceMinInput.value && ad.offer.price <= priceMaxInput.value);

  afterFilteringAdsArray = afterFilteringAdsArray.filter((ad) =>
    ad.offer.rooms === Number(roomsInput.value) ||  roomsInput.value === DEFAULT_VALUE);

  afterFilteringAdsArray = afterFilteringAdsArray.filter((ad) =>
    ad.offer.guests === Number(guestsInput.value) || guestsInput.value === DEFAULT_VALUE);

  getFeaturesArray();

  afterFilteringAdsArray = afterFilteringAdsArray.filter((ad) => {

    let featuresCopy = undefined;
    if (ad.offer.features !== undefined){
      featuresCopy = ad.offer.features.slice();
    }

    return ((featuresArray.length === 0) ||
    (featuresCopy !== undefined &&
      featuresCopy.sort().join(',').indexOf(featuresArray.sort().join(',')) !== -1));
  });

  return afterFilteringAdsArray;
};


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
    iconSize: IconData.SIZE,
    iconAnchor: IconData.ANCHOR,
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

  const afterFilteringAdsArray = useFilters(ads);
  markersGroup.clearLayers();

  afterFilteringAdsArray.slice(0, ADS_COUNT).forEach(({author, location, offer}) => {
    const cardElement = createPopup(author, offer);
    const adMarker = createMarker(location, cardElement);
    adMarker.addTo(markersGroup);
  });
};

export {renderAdList};
