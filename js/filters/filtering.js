const filtersForm = document.querySelector('.map__filters');
const typeFilter = document.querySelector('#housing-type');
const priceFilter = document.querySelector('#housing-price');
const roomsFilter = document.querySelector('#housing-rooms');
const guestsFilter = document.querySelector('#housing-guests');

const wifiFilter = document.querySelector('#filter-wifi');
const dishwasherFilter = document.querySelector('#filter-dishwasher');
const parkingFilter = document.querySelector('#filter-parking');
const washerFilter = document.querySelector('#filter-washer');
const elevatorFilter = document.querySelector('#filter-elevator');
const conditionerFilter = document.querySelector('#filter-conditioner');

//для хранения данных с фильтров
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

const getPrice = (priceIntervalString) => {

  switch (priceIntervalString){
    case 'any' : {
      return {minPrice: 0, maxPrice: Infinity};
    }
    case 'middle': {
      return {minPrice: 10000, maxPrice: 50000};
    }

    case 'low': {
      return {minPrice: 0, maxPrice: 10000};
    }

    case 'high': {
      return {minPrice: 50000, maxPrice: Infinity};
    }
  }
};

const setTypeFilter = (cb) => {
  if (typeFilter) {
    typeFilter.addEventListener('change', (evt) => {
      const typeChange = evt.target.value;
      if (typeInput) {
        typeInput.value = typeChange;
      }
      cb();
    });
  }
};

const setPriceFilter = (cb) => {
  if (priceFilter) {
    priceFilter.addEventListener('change', (evt) => {
      const priceInterval = getPrice(evt.target.value);
      if (priceMinInput && priceMaxInput) {
        priceMinInput.value = priceInterval.minPrice;
        priceMaxInput.value = priceInterval.maxPrice;
      }
      cb();
    });
  }
};

const setRoomsFilter = (cb) => {
  if (roomsFilter) {
    roomsFilter.addEventListener('change', (evt) => {
      const roomsCount = evt.target.value;
      if (roomsInput) {
        roomsInput.value = roomsCount;
      }
      cb();
    });
  }
};

const setGuestsFilter = (cb) => {
  if (guestsFilter) {
    guestsFilter.addEventListener('change', (evt) => {
      const guestsCount = evt.target.value;
      if (guestsInput) {
        guestsInput.value = guestsCount;
      }
      cb();
    });
  }
};

const setDishwasherFilter = (cb) =>{
  if (dishwasherFilter) {
    dishwasherFilter.addEventListener('change', () => {
      if (dishwasherInput){
        dishwasherInput.checked = dishwasherFilter.checked;
      }
      cb();
    });
  }
};

const setWifiFilter = (cb) =>{
  if (wifiFilter) {
    wifiFilter.addEventListener('change', () => {
      if (wifiInput){
        wifiInput.checked = wifiFilter.checked;
      }
      cb();
    });
  }
};


const setParkingFilter = (cb) =>{
  if (parkingFilter) {
    parkingFilter.addEventListener('change', () => {
      if (parkingInput){
        parkingInput.checked = parkingFilter.checked;
      }
      cb();
    });
  }
};

const setWasherFilter = (cb) =>{
  if (washerFilter) {
    washerFilter.addEventListener('change', () => {
      if (washerInput){
        washerInput.checked = washerFilter.checked;
      }
      cb();
    });
  }
};

const setElevatorFilter = (cb) =>{
  if (elevatorFilter) {
    elevatorFilter.addEventListener('change', () => {
      if (elevatorInput){
        elevatorInput.checked = elevatorFilter.checked;
      }
      cb();
    });
  }
};

const setConditionerFilter = (cb) =>{
  if (conditionerFilter) {
    conditionerFilter.addEventListener('change', () => {
      if (conditionerInput){
        conditionerInput.checked = conditionerFilter.checked;
      }
      cb();
    });
  }
};

export {setTypeFilter, setPriceFilter, setRoomsFilter, setGuestsFilter, setWifiFilter, setDishwasherFilter,
  setParkingFilter, setWasherFilter, setElevatorFilter,setConditionerFilter};
