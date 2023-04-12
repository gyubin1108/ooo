
const display = document.getElementById("display");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const clear = document.querySelector(".clear");
const equal = document.querySelector(".equal");
const decimal = document.querySelector(".decimal");

let firstOperand = null;
let operator = null;
let secondOperand = null;

function reset() {
  firstOperand = null;
  operator = null;
  secondOperand = null;
  display.value = "0";
}

function calculate() {
  let result = null;
  switch (operator) {
    case "+":
      result = parseFloat(firstOperand) + parseFloat(secondOperand);
      break;
    case "-":
      result = parseFloat(firstOperand) - parseFloat(secondOperand);
      break;
    case "*":
      result = parseFloat(firstOperand) * parseFloat(secondOperand);
      break;
    case "/":
      result = parseFloat(firstOperand) / parseFloat(secondOperand);
      break;
    default:
      return;
  }
  reset();
  display.value = result.toFixed(2);
}

function inputNumber(event) {
  const number = event.target.value;
  if (display.value === "0") {
    display.value = number;
  } else {
    display.value += number;
  }
  if (operator === null) {
    firstOperand = display.value;
  } else {
    secondOperand = display.value;
  }
}

function inputOperator(event) {
  operator = event.target.value;
  if (firstOperand !== null && secondOperand !== null) {
    calculate();
  }
}

function inputDecimal(event) {
  if (!display.value.includes(".")) {
    display.value += ".";
    if (operator === null) {
      firstOperand = display.value;
    } else {
      secondOperand = display.value;
    }
  }
}

numbers.forEach((button) => {
  button.addEventListener("click", inputNumber);
});

operators.forEach((button) => {
  button.addEventListener("click", inputOperator);
});

clear.addEventListener("click", reset)
