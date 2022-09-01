function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function validateNumbers(...numbers) {
  for (number in numbers) {
    if (isNaN(numbers[number])) {
      return false;
    }
  }
  return true;
}

function operate(a, b, operator) {
  switch (operator) {
    case "+":
      return add(a, b);
      break;
    case "-":
      return sub(a, b);
      break;
    case "*":
      return multiply(a, b);
      break;
    case "/":
      return divide(a, b);
      break;
    default:
      return "operator error";
      break;
  }
}

let strDisplay = "";
const display = document.querySelector('.display');

function setNumberListener() {
  document.querySelectorAll('.digit').forEach(item => {
    item.addEventListener('click', event => {
      let number = parseInt(item.innerHTML);
      strDisplay += number + " ";
      display.innerHTML = strDisplay;
      console.log(strDisplay);
    })
  })
}

function setOperatorsListener() {
  document.querySelectorAll('.operator').forEach(item => {
    item.addEventListener('click', event => {
      let operator = item.innerHTML;
      strDisplay += operator + " ";
      display.innerHTML = strDisplay;
      console.log(strDisplay);
    })
  })
}

function setSpecialOperatorsListeners() {
  document.querySelector('.clear').addEventListener('click', event => {
    display.innerHTML = "Enter operation..."
    strDisplay = "";
  })
}

setNumberListener();
setOperatorsListener();
setSpecialOperatorsListeners();