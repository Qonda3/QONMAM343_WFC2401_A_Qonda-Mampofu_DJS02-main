const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  let outputValue;

  try {

    const dividendNumber = Number(dividend);
    const dividerNumber = Number(divider);

    if (isNaN(dividendNumber) || isNaN(dividerNumber)){
      throw new Error("Non-numeric inputs provided.")
    }

    if (dividerNumber === "0") {
      throw new Error("Division by zero is not allowed.");
    }

    if (!dividend || !divider){
      outputValue = "Division not performed. Both values are required in inputs. Try again"
    } else{
      outputValue = Math.trunc(dividendNumber / dividerNumber);
    }
    
  } catch (error) {
    console.error(error.message, error.stack);
    if (error.message === "Non-numeric inputs provided."){
      document.body.innerHTML = "Something critical went wrong. Please reload the page";
    } else {
      outputValue = "Division not performed. Invalid number provided. Try again";
    }
  }

  result.innerText = outputValue || "";
});