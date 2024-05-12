const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

// Event listener for form submission
form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent default form submission behavior
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  let outputValue;

  try {
    // Convert dividend and divider to numbers
    const dividendNumber = Number(dividend);
    const dividerNumber = Number(divider);

    // Check for non-numeric inputs
    if (isNaN(dividendNumber) || isNaN(dividerNumber)) {
      throw new Error("Non-numeric inputs provided.");
    }

    // Check for division by zero
    if (dividerNumber === 0) {
      throw new Error("Division by zero is not allowed.");
    }

    // Check if both inputs are provided
    if (!dividend || !divider) {
      outputValue = "Division not performed. Both values are required in inputs. Try again";
    } else {
      // Perform division and get the whole number result
      outputValue = Math.trunc(dividendNumber / dividerNumber);
    }
  } catch (error) {
    console.error(error.message, error.stack); // Log the error and its call stack

    // Handle non-numeric inputs
    if (error.message === "Non-numeric inputs provided.") {
      // Replace the entire page content with the error message
      document.body.innerHTML = "Something critical went wrong. Please reload the page";
    } else {
      // Handle other invalid scenarios
      outputValue = "Division not performed. Invalid number provided. Try again";
    }
  }

  // Update the result container with the output value or an empty string
  result.innerText = outputValue || "";
});