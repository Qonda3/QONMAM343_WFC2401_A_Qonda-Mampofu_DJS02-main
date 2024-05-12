const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  let outputValue;

  try {
    if (divider === "0") {
      throw new Error("Division by zero is not allowed.");
    }

    if (!dividend || !divider){
      outputValue = "Division not performed. Both values are required in inputs. Try again"
    } else{
      outputValue = Math.trunc(dividend / divider);
    }
    
  } catch (error) {
    console.error(error.message, error.stack);
    outputValue = "Division not performed. Invalid number provided. Try again";
  }

  result.innerText = outputValue;
});