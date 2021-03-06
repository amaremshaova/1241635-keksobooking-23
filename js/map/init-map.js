import {setFormsActive} from '../form/activation.js';
import {addAddress} from '../form/add-address.js';

const INIT_COORDS = {
  lat: 35.681776,
  lng: 139.753706,
};

const ZOOM_NUMBER = 10;

const MainIconData = {
  URL : 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg',
  SIZE_VALUES : [52, 52],
  ANCHOR_COORDS : [26, 52],
};

const IconData = {
  URL : 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg',
  SIZE_VALUES : [40, 40],
  ANCHOR_COORDS : [20, 40],
};


const map = L.map('map-canvas')
  .on('load', () => {
    setFormsActive();
  })
  .setView({
    lat: INIT_COORDS.lat,
    lng: INIT_COORDS.lng,
  }, ZOOM_NUMBER);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: MainIconData.URL,
  iconSize: MainIconData.SIZE_VALUES,
  iconAnchor: MainIconData.ANCHOR_COORDS});


const marker = L.marker(
  {
    lat: INIT_COORDS.lat,
    lng: INIT_COORDS.lng,
  },

  {
    draggable: true,
    icon: mainPinIcon,
  },
);

marker.addTo(map);

marker.on('moveend', (evt) => {
  addAddress(evt.target.getLatLng());
});


export {map, marker, INIT_COORDS, IconData, ZOOM_NUMBER};
