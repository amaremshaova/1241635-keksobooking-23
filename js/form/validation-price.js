const MinPriceValues = {
  MIN_PRICE_FLAT : 1000,
  MIN_PRICE_BUNGALOW : 0,
  MIN_PRICE_HOTEL : 3000,
  MIN_PRICE_HOUSE : 5000,
  MIN_PRICE_PALACE : 10000,
};

const MAX_PRICE = 1000000;

const setMinPrice = (typeSelect) => {
  switch (typeSelect.options[typeSelect.selectedIndex].text){
    case 'Квартира' : {
      return MinPriceValues.MIN_PRICE_FLAT;
    }

    case 'Бунгало': {
      return MinPriceValues.MIN_PRICE_BUNGALOW;
    }

    case 'Отель': {
      return MinPriceValues.MIN_PRICE_HOTEL;
    }

    case 'Дом': {
      return MinPriceValues.MIN_PRICE_HOUSE;
    }

    case 'Дворец':{
      return MinPriceValues.MIN_PRICE_PALACE;
    }
  }
};

const validationPriceInput = (priceInput, typeSelect) =>{
  const minPrice = setMinPrice(typeSelect);
  const value = priceInput.value;
  if (value < minPrice) {
    priceInput.setCustomValidity(`Минимальная цена при таком выборе типа жилья - ${minPrice}`);
    priceInput.style.border = '5px solid red';
  } else if (value > MAX_PRICE) {
    priceInput.setCustomValidity(`Максимальная цена при таком выборе типа жилья - ${MAX_PRICE}`);
    priceInput.style.border = '5px solid red';
  } else {
    priceInput.setCustomValidity('');
    priceInput.style.border = 'none';
  }

  priceInput.reportValidity();
};

export {MinPriceValues, validationPriceInput};
