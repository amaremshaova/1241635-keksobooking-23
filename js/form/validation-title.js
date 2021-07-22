const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;

const validationTitleInput = (titleInput) =>{
  const valueLength = titleInput.value.length;
  if (valueLength < MIN_TITLE_LENGTH) {
    titleInput.setCustomValidity(`Ещё ${  MIN_TITLE_LENGTH - valueLength } симв.`);
    titleInput.style.border = '5px solid red';
  } else if (valueLength > MAX_TITLE_LENGTH) {
    titleInput.setCustomValidity(`Удалите лишние ${  valueLength - MAX_TITLE_LENGTH } симв.`);
    titleInput.style.border = '5px solid red';
  } else if (valueLength === 0) {
    titleInput.setCustomValidity('Обязательное поле');
    titleInput.style.border = '5px solid red';
  } else {
    titleInput.setCustomValidity('');
    titleInput.style.border = 'none';
  }
  titleInput.reportValidity();
};

export {validationTitleInput};
