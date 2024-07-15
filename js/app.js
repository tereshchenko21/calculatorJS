
const firstUserNumber = document.getElementById('firstNumber');
const secondUserNumber = document.getElementById('secondNumber');

const resultButton = document.getElementById('result');
const outputField = document.getElementById('output');

const plusButton = document.getElementById('plus')
const minusButton = document.getElementById('minus')
const multiplyButton = document.getElementById('multiply')
const divideButton = document.getElementById('divide')

let action = '';

plusButton.onclick = function() {
    action = '+';
}

minusButton.onclick = function() {
    action = '-';
}

multiplyButton.onclick = function() {
    action = '*';
}

divideButton.onclick = function() {
    action = '/';
}

function changeColorOutput(result) {
    if (result > 0) {
        outputField.style.color = '#fff';
    } else {
        outputField.style.color = '#F7EC3F';
    }
}

function calculate(imp1, imp2, actionSymbol) {
    let num1 = Number(imp1.value);
    let num2 = Number(imp2.value);
    if (actionSymbol == '+') {
        return num1 + num2;
    } else if (actionSymbol == '-') {
        return num1 - num2;

    } else if (actionSymbol == '*') {
        return num1 * num2;
        
    } else if (actionSymbol == '/') {
        if (num2 == 0) {
            alert('Ошибка: деление на ноль невозможно.')
        } else {
            return num1 / num2;
        }
        
    } else {
        alert('Ошибка: действие не указано.');
    }
}

resultButton.onclick = function () {
    let result = calculate(firstUserNumber, secondUserNumber, action);
    changeColorOutput(result);
    outputField.textContent = result;
}