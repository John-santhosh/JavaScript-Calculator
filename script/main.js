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

function operate(a,b,operator){
    return operator(a,b)
}

console.log(operate(5, 6, add));