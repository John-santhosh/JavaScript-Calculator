function add(a, b) {
  return a + b;
}
function sub(a, b) {
  return a - b;
}
function mul(a, b) {
  return a * b;
}
function div(a, b) {
  return a / b;
}
function mod(a, b) {
  return a % b;
}

let ac = document.querySelector("#ac");
let clear = document.querySelector("#c");
// let modulo = document.querySelector("#mod");
// let divide = document.querySelector("#div");
// let addition = document.querySelector("#add");
// let subtraction = document.querySelector("#sub");
// let multiply = document.querySelector("#mul");
let equalTo = document.querySelector("#equal");
let operator = document.querySelectorAll(".operator");
let result = document.querySelector(".result");
let keys = document.querySelectorAll(".key");
function operate(a, b, operator) {
  return operator(a, b);
}
// console.log(operate(5, 6, add));

let number1 = "";
let number2 = "";
let operator1 = "";
let displayResult = "";

// for numbers
let NumberInput = document.querySelectorAll(".input");
let display = document.querySelector(".display");

NumberInput.forEach((each) => {
  each.addEventListener("click", (e) => {
    currentNumber = e.target.value;
    display.textContent += `${currentNumber}`;
    //
    if (!operator1) number1 = "";
    //
    if (number1) number2 += currentNumber;
  });
});

// setting operator
operator.forEach((each) => {
  each.addEventListener("click", (e) => {
    // for chaining. if operator already in the equation then performing equals() function
    let a = ["/", "*", "-", "+", "%"];
    for (let each of a) {
      if (display.textContent.includes(each)) equals();
    }
    if (!number1) {
      number1 = display.textContent;
    }
    // replacing operator if already exist
    // if (operator1) {
    //   let displayText = display.textContent;
    //   display.textContent = displayText.slice(0, displayText.length - 1);
    // }
    operator1 = "";
    display.textContent += e.target.dataset.value;
    operator1 = e.target.dataset.id;
    // result.textContent = display.textContent;
    // display.textContent = "";
  });
});

// equal-to key and enter key
window.addEventListener("keydown", (e) => {
  if (e.key == "=" || e.key == "Enter") equals();
});
equalTo.addEventListener("click", equals);
function equals() {
  console.log(number1, operator1, number2);
  if (number1 || number2) {
    displayResult = operate(
      Number(number1),
      Number(number2),
      window[operator1]
    );
    result.textContent = displayResult;
    display.textContent = "";
    number1 = "";
    number2 = "";
    number1 = displayResult;
    operator1 = "";
  } else return;
}
// clear all
ac.addEventListener("click", acEvent);
function acEvent() {
  number1 = "";
  number2 = "";
  operator1 = "";
  result.textContent = 0;
  display.textContent = "";
}

window.addEventListener("keydown", (e) => {
  keys.forEach((each) => {
    let eKey = e.key;
    if (each.textContent == eKey) {
      if (Number.isInteger(Number(eKey)) || eKey === ".") {
        display.textContent += `${eKey}`;
        number2 += eKey;
      } else {
        operator1 = each.getAttribute("id");
        number1 = number2;
        number2 = "";
        display.textContent += `${eKey}`;
      }
    }
  });
});
// clearing the last entered number
window.addEventListener("keydown", (e) => {
  if (e.key == "Backspace") clearLastNumber();
  else if (e.key == "Escape") acEvent();
});
clear.addEventListener("click", clearLastNumber);
function clearLastNumber() {
  if (display.textContent) {
    let lastPiece = display.textContent.length - 1;
    let a = ["/", "*", "-", "+", "%"];
    if (!a.includes(display.textContent.at(-1))) {
      display.textContent = display.textContent.slice(0, lastPiece);
      if (number2) number2 = number2.slice(0, number2.length - 1);
      else if (number1) number1 = number1.slice(0, number1.length - 1);
    } else return;
  }
}
