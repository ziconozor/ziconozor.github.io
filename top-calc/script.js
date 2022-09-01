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
    case "—":
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

const display = document.querySelector('.display');
let strDisplay = "";
let currentNumber = "";
let computed = false;

function setNumberListener() {
  document.querySelectorAll('.digit').forEach(item => {
    item.addEventListener('click', event => {
      if (item.innerHTML == '.') {
        strDisplay += item.innerHTML;
      } else {
        let number = parseFloat(item.innerHTML);
        strDisplay += number;
      }
      display.innerHTML = strDisplay;
    })
  })
}

function setOperatorsListener() {
  document.querySelectorAll('.operator').forEach(item => {
    item.addEventListener('click', event => {
      let operator = item.innerHTML;

      // true if first operation already made
      if (computed) {
        strDisplay = display.innerHTML + operator;
        computed = false;
      } else {
        // If the previous char is a number
        if (!isNaN(strDisplay.charAt(strDisplay.length - 1))) {
          strDisplay += operator;
        }
        // If the previous char is an operator and needs to be updated 
        else {
          strDisplay = strDisplay.substring(0, strDisplay.length - 1);
          strDisplay += operator;
        }
      }

      display.innerHTML = strDisplay;
    })
  })
}

function setSpecialOperatorsListeners() {
  document.querySelector('.clear').addEventListener('click', event => {
    display.innerHTML = "Enter operation..."
    strDisplay = "";
  });

  document.querySelector('.equal').addEventListener('click', event => {
    if (isNaN(parseFloat(display.innerHTML))) {
      console.log('nan')
    } else {
      let strNumber = "";
      let tempNumber = null;
      let operator = "";
      let answer = 0;
      for (let i = 0; i < strDisplay.length + 1; i++) {
        if ((!isNaN(strDisplay.charAt(i)) ||
            (strDisplay.charAt(i) == '.' || strDisplay.charAt(i) == '-')) &&
          i != strDisplay.length) {
          strNumber += strDisplay.charAt(i);
        } else {
          if (tempNumber == null) {
            tempNumber = parseFloat(strNumber);
            strNumber = "";
          } else {
            answer = operate(tempNumber,
              parseFloat(strNumber),
              operator).toFixed(2);
            computed = true;
            strNumber = "";
            tempNumber = answer;
          }
          operator = strDisplay.charAt(i);
        }
      }
      display.innerHTML = answer;
      strDisplay = "";

    }
  });
}

setNumberListener();
setOperatorsListener();
setSpecialOperatorsListeners();