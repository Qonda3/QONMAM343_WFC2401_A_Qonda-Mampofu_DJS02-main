document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("[data-form]");
  const result = document.querySelector("[data-result]");

  form.addEventListener("submit", handleFormSubmit);

  function handleFormSubmit(event) {
    event.preventDefault();

    const dividend = getNumberInputValue('dividend');
    const divider = getNumberInputValue('divider');

    if (isNaN(dividend) || isNaN(divider)) {
        displayError("Both inputs must be valid numbers.");
        return;
    }

    if (divider === 0) {
      displayError("Division by zero is not allowed.");
      return;
    }

    const divisionResult = divideNumbers(dividend, divider);

    if (Number.isInteger(divisionResult)) {
      displayResult(divisionResult);
    }else {
      displayError("Result is not a whole number.");
    }

  }

  function getNumberInputValue(inputName) {
    const input = document.querySelector(`input[name="${inputName}"]`);
    return parseFloat(input.value);
  }

  function divideNumbers(dividend, divider) {
    return dividend / divider;
  }

  function displayResult(result) {
    resultMessage.textContent = result;
  }

  function displayError(message) {
    resultMessage.textContent = message;
  }

});