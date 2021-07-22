import {MinPriceValues} from './validation-price.js';

const changePlaceholderPriceInput = (priceInput, typeSelect) =>{
  switch (typeSelect.options[typeSelect.selectedIndex].text){
    case 'Квартира' :
      priceInput.placeholder = MinPriceValues.MIN_PRICE_FLAT;
      break;

    case 'Бунгало': {
      priceInput.placeholder = MinPriceValues.MIN_PRICE_BUNGALOW;
      break;
    }

    case 'Отель': {
      priceInput.placeholder = MinPriceValues.MIN_PRICE_HOTEL;
      break;
    }

    case 'Дом': {
      priceInput.placeholder = MinPriceValues.MIN_PRICE_HOUSE;
      break;
    }

    case 'Дворец':{
      priceInput.placeholder = MinPriceValues.MIN_PRICE_PALACE;
      break;
    }
  }
};


export {changePlaceholderPriceInput};
