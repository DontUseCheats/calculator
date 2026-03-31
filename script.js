// Functions for basic math
let results = 0;

const add = (firstValue, secondValue) => {
    results = firstValue + secondValue;
    return results;
}

const subtract = (firstValue, secondValue) =>  {
    results = firstValue - secondValue;
    return results;
}

const multiply = (firstValue, secondValue) => {
    results = firstValue * secondValue;
    return results;
}

const divide = (firstValue, secondValue) => {
    results = firstValue / secondValue;
    return results;
}


const operate = (num1, num2, inputedOperator) => {
switch (inputedOperator) {
    case "+":
        return add(num1, num2);
        break;
    case "-":
        return subtract(num1, num2);
        break;
    case "*":
        return multiply(num1, num2);
        break;
    case "/":
        return divide(num1, num2);
        break;
    }
}
let currentStage = 0;
let displayNum1 = 0;
let displayOperator = "";
let displayNum2 = 0;

const btn = document.querySelectorAll(".button"); 

btn.forEach((button) => {
    button.addEventListener("click", (event) => {
        if (event.target.textContent === "clear"){
            currentStage = 0;
            displayNum1 = 0;
            displayOperator = 0;
            displayNum2 = 0;
        }
        else if (currentStage === 0) {
            displayNum1 = Number(event.target.textContent);
            currentStage += 1;
            console.log(displayNum1);
        }
        else if (currentStage === 1) {
            displayOperator = event.target.textContent;
            currentStage += 1;
            console.log(displayOperator);
        }
        else if (currentStage === 2) {
            displayNum2 = Number(event.target.textContent);
            currentStage += 1;
            console.log(displayNum2);
        }
        else if (currentStage === 3) {
            if (event.target.textContent === "=") {
            results = operate(displayNum1, displayNum2, displayOperator);
            console.log(results);
            }
            currentStage === 0;
        }
    })
})
