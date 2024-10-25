const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

let currentInput = '';
let previousInput = '';
let operator = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.value;

        if (value === 'C') {
            currentInput = '';
            previousInput = '';
            operator = '';
            updateDisplay();
        } else if (value === '=') {
            if (operator && currentInput !== '') {
                calculate();
            }
        } else if (value === '.' && !currentInput.includes('.')) {
            currentInput += value;
            updateDisplay();
        } else if (value === '+' || value === '-' || value === '*' || value === '/') {
            if (operator && currentInput !== '') {
                calculate();
            }
            operator = value;
            previousInput = currentInput;
            currentInput = '';
            updateDisplay();
        } else {
            currentInput += value;
            updateDisplay();
        }
    });
});

function updateDisplay() {
    display.value = currentInput || previousInput;
}

function calculate() {
    let result;
    switch (operator) {
        case '+':
            result = parseFloat(previousInput) + parseFloat(currentInput);
            break;
        case '-':
            result = parseFloat(previousInput) - parseFloat(currentInput);
            break;
        case '*':
            result = parseFloat(previousInput) * parseFloat(currentInput);
            break;
        case '/':
            result = parseFloat(previousInput) / parseFloat(currentInput);
            break;
        default:
            break;
    }
    currentInput = result.toString();
    previousInput = '';
    operator = '';
    updateDisplay();
}