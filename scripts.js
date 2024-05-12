const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  let outputValue = Math.trunc(dividend / divider);

  if (!dividend || !divider){
    outputValue = "Division not performed. Both values are required in inputs. Try again"
  }
  result.innerText = outputValue;
});