const checkValidationTimeSelect = (evt, timeInSelect, timeOutSelect) => {
  timeOutSelect.value = (evt.target === timeInSelect) ?
    timeOutSelect.value = timeInSelect.value :
    timeInSelect.value = timeOutSelect.value;
};

export {checkValidationTimeSelect};
