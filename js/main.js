import './form/activation.js';
import './form/validation.js';
import './map/render-ads.js';
import './form/set-form.js';
import './form/clear-form.js';
import './upload-photo.js';

import {getData} from './api.js';
import {renderAdList} from './map/render-ads.js';
import {setAdFormSubmit } from './form/set-form.js';
import {sendData } from './api.js';
import {openSuccessModal, openErrorModal } from './user-modal/modal.js';
import {debounce} from './utils/debounce.js';
import {setTypeFilter, setPriceFilter, setRoomsFilter, setGuestsFilter, setWifiFilter, setDishwasherFilter,
  setParkingFilter, setWasherFilter, setElevatorFilter,setConditionerFilter} from './filters/filtering.js';

const RERENDER_DELAY = 500;

getData((ads) => {
  renderAdList(ads);
  setTypeFilter(debounce(
    () => renderAdList(ads),
    RERENDER_DELAY,
  ));

  setPriceFilter(debounce(
    () => renderAdList(ads),
    RERENDER_DELAY,
  ));

  setRoomsFilter(debounce(
    () => renderAdList(ads),
    RERENDER_DELAY,
  ));

  setGuestsFilter(debounce(
    () => renderAdList(ads),
    RERENDER_DELAY,
  ));

  setWifiFilter(debounce(
    () => renderAdList(ads),
    RERENDER_DELAY,
  ));

  setDishwasherFilter(debounce(
    () => renderAdList(ads),
    RERENDER_DELAY,
  ));

  setWasherFilter(debounce(
    () => renderAdList(ads),
    RERENDER_DELAY,
  ));

  setElevatorFilter(debounce(
    () => renderAdList(ads),
    RERENDER_DELAY,
  ));

  setConditionerFilter(debounce(
    () => renderAdList(ads),
    RERENDER_DELAY,
  ));

  setParkingFilter(debounce(
    () => renderAdList(ads),
    RERENDER_DELAY,
  ));
});


setAdFormSubmit(sendData, openSuccessModal, openErrorModal);
