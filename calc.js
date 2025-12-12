// --- Global Initialization (Connects to the HTML) ---
let calculator;

document.addEventListener('DOMContentLoaded', () => {
    // Instantiate the calculator factory function and connect it to the 'display' ID
    calculator = createCalculator('display'); 
});


// --- The Calculator Factory Function (Module Pattern) ---

const createCalculator = (displayId) => {
    // 1. Encapsulated State (Private Variables)
    let currentInput = '0'; // The number currently being typed by the user (string)
    let expression = [];    // Array of numbers and operators already entered (e.g., [10, '+', 5])
    let awaitingNewOperand = true; // True if the next button press should start a new number
    let hasDecimal = false;

    // 2. Internal Helper to Update the UI
    const displayElement = document.getElementById(displayId);

    const _updateDisplay = (value = currentInput) => {
        // Display the current number being typed or the last result
        displayElement.value = value;
    };

    // --- Public Interface ---
    return {
        // Method to handle number inputs
        inputNumber: (num) => {
            if (awaitingNewOperand) {
                // If the user presses 5 after pressing +, clear currentInput
                currentInput = String(num);
                awaitingNewOperand = false;
            } else {
                // Build the multi-digit number
                currentInput = (currentInput === '0' && num !== 0) ? String(num) : currentInput + String(num);
            }
            _updateDisplay();
        },

        // Method to handle decimal point
        inputDecimal: () => {
            if (awaitingNewOperand) {
                currentInput = '0.';
                awaitingNewOperand = false;
            } else if (!currentInput.includes('.')) {
                currentInput += '.';
            }
            _updateDisplay();
        },

        // Method to handle operator inputs
        inputOperator: (op) => {
            if (currentInput !== '0' || expression.length > 0) {
                // 1. Push the current number into the expression history
                expression.push(parseFloat(currentInput));
                
                // 2. Push the operator
                expression.push(op);
                
                // 3. Reset state for the next number
                currentInput = '0';
                awaitingNewOperand = true;
                
                // For display, show the last operator to indicate readiness
                _updateDisplay(op);
            }
        },

        // Method to calculate the final result
        calculate: () => {
            if (awaitingNewOperand && expression.length > 0) {
                // Ignore equals if already calculated, unless another operator was pressed.
                return;
            }

            // 1. Add the final input number to the expression array
            expression.push(parseFloat(currentInput));
            
            // 2. Join the array into a calculation string (e.g., "5 + 3 - 2")
            const fullExpression = expression.join('');
            
            try {
                let result = eval(fullExpression);
                
                // Update state for next operation
                currentInput = String(result);
                expression = []; // Clear history
                awaitingNewOperand = true; // Ready for new number or operator chaining

                _updateDisplay(currentInput);
                
            } catch (e) {
                currentInput = 'Error';
                expression = [];
                _updateDisplay();
                awaitingNewOperand = true;
            }
        },

        // Method to clear the state (AC button)
        clear: () => {
            currentInput = '0';
            expression = [];
            awaitingNewOperand = true;
            _updateDisplay();
        },

        // For debugging (optional)
        getExpression: () => ({ currentInput, expression })
    };
};