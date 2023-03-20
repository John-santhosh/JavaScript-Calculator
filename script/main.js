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
let equalTo = document.querySelector("#equal");
let operator = document.querySelectorAll(".operator");
let result = document.querySelector(".result");
let keys = document.querySelectorAll(".key");
function calc(a, b, operator) {
  return operator(a, b);
}

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
    //for chaining . if operator1 has value (which the result from the previous action) ,
    // This condition will prevent deleting the previous value
    if (!operator1) number1 = "";
    //assigning number2 after number1
    if (number1) number2 += currentNumber;
  });
});

// setting operator
operator.forEach((each) => {
  each.addEventListener("click", operate);
});

// equal-to key and enter key
equalTo.addEventListener("click", equals);

window.addEventListener("keydown", (e) => {
  if (e.key == "=" || e.key == "Enter") equals();
  let a = ["/", "*", "-", "+", "%"];
  if (a.includes(e.key)) operate();
});

// clear all
ac.addEventListener("click", acEvent);

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
clear.addEventListener("click", clearLastNumber);

window.addEventListener("keydown", (e) => {
  if (e.key == "Backspace") clearLastNumber();
  else if (e.key == "Escape") acEvent();
});

// setting year in footer
window.addEventListener("DOMContentLoaded", () => {
  let year = document.querySelector(".year");
  let date = new Date();
  year.textContent = date.getFullYear();
});

// functions
function operate() {
  // for chaining. if operator already in the equation then performing equals() function
  let a = ["/", "*", "-", "+", "%"];
  for (let each of a) {
    if (display.textContent.includes(each)) equals();
  }
  // assigning number1
  if (!number1) number1 = display.textContent;

  //assigning the operator only when the user entered number1
  if (!number1) return;
  // clearing previous operator and saving new operator
  operator1 = "";
  display.textContent += this.dataset.value;
  operator1 = this.dataset.id;
}
function equals() {
  if (number1 || number2) {
    displayResult = calc(Number(number1), Number(number2), window[operator1]);
    result.textContent = displayResult;
    display.textContent = "";
    number1 = "";
    number2 = "";
    // for chaining assigning number1 with previous result
    number1 = displayResult;
    operator1 = "";
  } else return;
}
function acEvent() {
  number1 = "";
  number2 = "";
  operator1 = "";
  result.textContent = 0;
  display.textContent = "";
}
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
