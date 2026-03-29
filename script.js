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
    }
}