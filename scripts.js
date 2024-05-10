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

  }


});