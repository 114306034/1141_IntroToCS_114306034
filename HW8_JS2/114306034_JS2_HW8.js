function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }
function multiply(a, b) { return a * b; }
function divide(a, b) { return b === 0 ? "Error: Division by zero" : a / b; }

function calculate() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const operator = document.getElementById("operator").value;
    const resultElement = document.getElementById("result");
    let result;
    if (isNaN(num1) || isNaN(num2)) {
        resultElement.textContent = "Result = Invalid Input";
        resultElement.classList.add("error");
        return;
    }
    if (!operator) {
        resultElement.textContent = "Result = Please select an operator!";
        resultElement.classList.add("error");
        return;
    }
    switch(operator){
        case "+": result = add(num1,num2); break;
        case "-": result = subtract(num1,num2); break;
        case "*": result = multiply(num1,num2); break;
        case "/": result = divide(num1,num2); break;
    }
    if(typeof result==="number"){
        resultElement.textContent="Result = "+result.toFixed(2);
        resultElement.classList.remove("error");
    }else{
        resultElement.textContent="Result = "+result;
        resultElement.classList.add("error");
    }
}

const calculateBtn = document.getElementById("calculateBtn");
calculateBtn.addEventListener("click", calculate);

document.getElementById("operator").addEventListener("change", function(){
    const op = this.value;
    let text;
    switch(op){
        case "+": text="Add"; break;
        case "-": text="Subtract"; break;
        case "*": text="Multiply"; break;
        case "/": text="Divide"; break;
        default: text="Calculate";
    }
    calculateBtn.textContent = text;
});

