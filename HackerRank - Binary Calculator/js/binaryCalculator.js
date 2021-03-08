<<<<<<< Updated upstream
let button1 = document.getElementById("btn1");
let button0 = document.getElementById("btn0");

let buttonClear = document.getElementById("btnClr");

let buttonSum = document.getElementById("btnSum");
let buttonSub = document.getElementById("btnSub");
let buttonMulti = document.getElementById("btnMul");
let buttonDiv = document.getElementById("btnDiv");


let buttonEqual = document.getElementById("btnEql");
let resultDisplay = document.getElementById("res");

let number = ""
let operator = ""
let operand1 = ""
let operand2 = ""
let result = ""

let bolconditional = true
=======
const button1 = document.getElementById("btn1");
const button0 = document.getElementById("btn0");
const buttonClear = document.getElementById("btnClr");
const buttonSum = document.getElementById("btnSum");
const buttonSub = document.getElementById("btnSub");
const buttonMulti = document.getElementById("btnMul");
const buttonDiv = document.getElementById("btnDiv");
const buttonEqual = document.getElementById("btnEql");
const resultDisplay = document.getElementById("res");

const resultDefault = {'number': '','operator' : "", 'operand1' : "", 'operand2' : "", 'bolconditional' : true }
let result = resultDefault
>>>>>>> Stashed changes

function writeNumber (element) {
    number = document.getElementById(element.target.id).innerHTML
    if (bolconditional) {
        resultDisplay.innerHTML += number
    } else {
        operand2 += number
        resultDisplay.innerHTML = operand1 + operator + operand2
        
}};

function writeOperator (element) {
    operator = document.getElementById(element.target.id).innerHTML
    bolconditional = false
    
    if (operand1 === ""){
        operand1 = resultDisplay.innerHTML
        resultDisplay.innerHTML = operand1 + operator
    } else if(operand2 != ""){
        equal()
        operand1 = result
    } else 
    resultDisplay.innerHTML = operand1 + operator 
};

function clearResult () {
<<<<<<< Updated upstream
    resultDisplay.innerHTML = ""
    operand1 = ""
    operand2 = ""
    operator = ""
    result = ""
    number = ""
    bolconditional = true
=======
    result = resultDefault
>>>>>>> Stashed changes
};

function equal () {
    operand1 = parseInt(operand1, 2)
    operand2 = parseInt(operand2, 2)
    
    if(operator === "+") {
        result = operand1 + operand2
        resultDisplay.innerHTML = result.toString(2)
    } else if (operator === "-") {
        result = operand1 - operand2
        resultDisplay.innerHTML = result.toString(2)
    }  else if (operator === "*") {
        result = operand1 * operand2
        resultDisplay.innerHTML = result.toString(2)
    } else if (operator === "/") {
        result = Math.floor(operand1 / operand2)
        resultDisplay.innerHTML = result.toString(2)
    }
    
};

button1.addEventListener('click', writeNumber);
button0.addEventListener('click', writeNumber);
<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
buttonSum.addEventListener('click', writeOperator);
buttonSub.addEventListener('click', writeOperator);
buttonMulti.addEventListener('click', writeOperator);
buttonDiv.addEventListener('click', writeOperator);
<<<<<<< Updated upstream

buttonClear.addEventListener('click', clearResult);
buttonEqual.addEventListener('click', equal);
=======
buttonClear.addEventListener('click', clearResult);
buttonEqual.addEventListener('click', equal);
>>>>>>> Stashed changes
