const NUMBER_DECIMAL_PLACES = 5;
const addressInput = document.querySelector('#address');

const addAddress = (coords) => {
  addressInput.value = `${coords['lat'].toFixed(NUMBER_DECIMAL_PLACES)}, ${coords['lng'].toFixed(NUMBER_DECIMAL_PLACES)}`;
};

export {addAddress};
