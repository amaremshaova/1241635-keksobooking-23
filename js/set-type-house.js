const setTypeHouse = (type) => {
  switch(type) {
    case 'flat': {
      return 'Квартира';
    }

    case 'bungalow': {
      return 'Бунгало';
    }

    case 'house': {
      return 'Дом';
    }

    case 'palace': {
      return 'Дом';
    }

    case 'hotel': {
      return 'Отель';
    }

    default: {
      return 'Неопределенный тип жилья';
    }
  }
};


export {setTypeHouse};
