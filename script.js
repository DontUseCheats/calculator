// Functions for basic math
const add = (firstValue, secondValue) => {
    const results = firstValue + secondValue;
    return results;
}

const subtract = (firstValue, secondValue) =>  {
    const results = firstValue - secondValue;
    return results;
}

const multiply = (firstValue, secondValue) => {
    const results = firstValue * secondValue;
    return results;
}

const divide = (firstValue, secondValue) => {
    const results = firstValue / secondValue;
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
        if (currentStage === 0) {
            displayNum1 = event.target.textContent;
            currentStage += 1;
        }
        else if (currentStage === 1) {
            displayOperator = event.target.textContent;
            currentStage += 1;
        }
        else {
            displayNum2 = event.target.textContent;
            currentStage += 1;
        }
    })
})
