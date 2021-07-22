const clearError = (roomNumberSelect) => {
  roomNumberSelect.setCustomValidity('');
  roomNumberSelect.style.border = 'none';
};

const validationNumberRoomSelect = (roomNumberSelect, capacitySelect) => {
  const roomNumber = roomNumberSelect.options[roomNumberSelect.selectedIndex].text;
  const capacityText = capacitySelect.options[capacitySelect.selectedIndex].text;

  switch (roomNumber) {
    case '1 комната':{
      if (capacityText !== 'для 1 гостя'){
        roomNumberSelect.style.border = '5px solid red';
        roomNumberSelect.setCustomValidity('В 1 комнату может быть поселен только 1 гость');
      } else {
        clearError(roomNumberSelect);
      }
      break;
    }

    case '2 комнаты':{
      if (capacityText === 'для 3 гостей' || capacityText === 'не для гостей'){
        roomNumberSelect.style.border = '5px solid red';
        roomNumberSelect.setCustomValidity('В 2 комнаты может быть поселен: 1 или 2 гостя');
      } else {
        clearError(roomNumberSelect);
      }
      break;
    }

    case '3 комнаты':{
      if (capacityText === 'не для гостей'){
        roomNumberSelect.style.border = '5px solid red';
        roomNumberSelect.setCustomValidity('В 3 комнаты может быть поселен: 1 или 2, или 3 гостей');
      } else {
        clearError(roomNumberSelect);
      }
      break;
    }

    case '100 комнат':{
      if (capacityText !== 'не для гостей'){
        roomNumberSelect.style.border = '5px solid red';
        roomNumberSelect.setCustomValidity('В комнаты невозможно разместить гостей');
      } else {
        clearError(roomNumberSelect);
      }
      break;
    }
  }

  roomNumberSelect.reportValidity();
};

export {validationNumberRoomSelect};
