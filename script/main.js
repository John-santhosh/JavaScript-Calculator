function add(a,b){
    return a + b;
}
function sub(a,b){
    return a - b;
}
function mul(a,b){
    return a * b;
}
function div(a,b){
    return a / b;
}
function mod(a,b){
    return a%b;
}

let ac = document.querySelector('#ac')
let clear = document.querySelector('#c')
let modulo = document.querySelector('#mod')
let divide = document.querySelector('#div')
let addition = document.querySelector('#add')
let subtraction = document.querySelector('#sub')
let multiply = document.querySelector('#mul')
let equalTo = document.querySelector('#equal')
let operator = document.querySelectorAll(".operator");
let result = document.querySelector(".result")

function operate(a,b,operator){
    return operator(a,b)
}
// console.log(operate(5, 6, add));

let num1;
let num2;
let operator1;

// for numbers
let eve = document.querySelectorAll('.key')
let display = document.querySelector('.display')

eve.forEach(each=>{
    each.addEventListener('click',e=>{
        // if(!a) { b = e.target.value}
        // console.log("john")
        a = e.target.value;
        // console.log(a,b)
        // if(a === "%" || a === "/" || a ==="+" || a == "-" || a ==="*"){
        //     console.log(e.target.getAttribute("id"))
        // }
        // console.log(a)
        // if(operator1){num2=a;return;}
        if(Number.isInteger(Number(a))||a===".")
        {  
            if(operator1){
                num2=a
            }else num1=a
            // console.log(num1)
        }
        display.textContent += ` ${e.target.value}`;
        console.log(num1 , operator1 , num2)
    })
})

clear.addEventListener('click',()=>display.textContent="0")

// console.log(operator)
operator.forEach(each=>{
    each.addEventListener("click", (e) => {
        console.log(e.target.getAttribute("id"))
        // display.textContent+=e.target.value
        operator1 = e.target.getAttribute("id");
    });
})

// 
equalTo.addEventListener('click',()=>{
    console.log(num1,num2,operator1)
    result.textContent = operate(10,20,["sub"])
})