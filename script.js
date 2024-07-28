document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');
    let currentInput = '';
    let operator = '';
    let operand1 = '';
    let operand2 = '';
    let result = '';

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const buttonText = button.textContent;

            if (button.classList.contains('digit')) {
                currentInput += buttonText;
                display.textContent = currentInput;
            } else if (button.id === 'clear') {
                currentInput = '';
                operator = '';
                operand1 = '';
                operand2 = '';
                result = '';
                display.textContent = '';
            } else if (button.id === 'equals') {
                operand2 = currentInput;
                result = calculate(operand1, operator, operand2);
                display.textContent = result;
                currentInput = result;
                operand1 = '';
                operator = '';
                operand2 = '';
            } else {
                if (currentInput) {
                    if (!operator) {
                        operand1 = currentInput;
                        operator = buttonText;
                        currentInput = '';
                    } else {
                        operand2 = currentInput;
                        result = calculate(operand1, operator, operand2);
                        display.textContent = result;
                        operand1 = result;
                        operator = buttonText;
                        currentInput = '';
                    }
                }
            }
        });
    });

    function calculate(operand1, operator, operand2) {
        let op1 = parseFloat(operand1);
        let op2 = parseFloat(operand2);

        switch (operator) {
            case '+':
                return op1 + op2;
            case '-':
                return op1 - op2;
            case '*':
                return op1 * op2;
            case '/':
                return op1 / op2;
            default:
                return 0;
        }
    }
});
