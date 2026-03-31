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

// Switch checks which operator function is called and used
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
// Global variables for btn functionality
let currentStage = 0;
let displayNum1 = "";
let displayOperator = "";
let displayNum2 = "";

// Displays user inputs
const displayBody = document.querySelector("#display");

// buttons functionality
const btn = document.querySelectorAll(".button"); 

btn.forEach((button) => {
    button.addEventListener("click", (event) => {
        if (event.target.textContent === "clear"){
            currentStage = 0;
            displayNum1 = "";
            displayOperator = "";
            displayNum2 = "";
            displayBody.textContent = "";
        }
        else if (currentStage === 0) {
            if (event.target.textContent !== "+" && event.target.textContent !== "-" && event.target.textContent !== "*" && event.target.textContent !== "/") {
                displayNum1 += (event.target.textContent);
                displayBody.textContent = displayNum1;
                console.log(displayNum1);
            }
            else {
                displayNum1 = Number(displayNum1);
                displayOperator = event.target.textContent;
                currentStage += 1;
                displayBody.textContent = displayNum1 + " " + displayOperator;
                console.log(displayOperator);
            }
        }
        else if (currentStage === 1) {
            if (event.target.textContent !== "=") {
                displayNum2 += (event.target.textContent);
                displayBody.textContent = displayNum1 + " " + displayOperator + " " + displayNum2;
                console.log(displayNum2);
            }
            else {
                displayNum2 = Number(displayNum2);
                currentStage += 1;
                results = operate(displayNum1, displayNum2, displayOperator);
                displayBody.textContent = displayNum1 + " " + displayOperator + " " + displayNum2 + "  = " + results;
                console.log(results);
            }
        }
    })
})
