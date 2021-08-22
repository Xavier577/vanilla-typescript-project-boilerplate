import { decrement } from "./helpers/decrement";
import { increment } from "./helpers/increment";
const incrementButton = <HTMLButtonElement>document.querySelector("#increment");
const decrementButton = <HTMLButtonElement>document.querySelector("#decrement");
const countValue = <HTMLSpanElement>document.querySelector("#count-value");

const handleIncrementClick = () => {
  let currentValue = parseFloat(countValue.innerText);
  let incrementedValue = increment(currentValue);
  countValue.innerText = incrementedValue.toString();
};

const handleDecrementClick = () => {
    let currentValue = parseFloat(countValue.innerText)
    let decrementedValue = decrement(currentValue)
    countValue.innerText= decrementedValue.toString()
};

incrementButton.addEventListener("click", handleIncrementClick);
decrementButton?.addEventListener("click", handleDecrementClick);
