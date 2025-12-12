const createCalculator = () => {
    // 1. Encapsulated State: Stores the entire expression (e.g., ['5', '+', '3'])
    let expression = [];
    
    // Internal helper to update the UI (simulated with console log)
    const _updateDisplay = () => {
        console.log("Current Display:", expression.join(' ') || '0');
    };

    // --- Public Interface ---
    return {
        // Method to handle number inputs
        inputNumber: (num) => {
            // Convert to string to handle concatenation correctly
            expression.push(String(num));
            _updateDisplay();
        },

        // Method to handle operator inputs
        inputOperator: (op) => {
            // Basic validation: Don't add an operator if the last thing was already an operator
            const lastItem = expression[expression.length - 1];
            if (lastItem === '+' || lastItem === '-' || lastItem === '*' || lastItem === '/') {
                console.warn("Cannot chain operators.");
                return;
            }
            expression.push(op);
            _updateDisplay();
        },

        // Method to calculate the final result (Your 'enter' or 'equal' logic)
        calculate: () => {
            // Join the expression array into a calculation string: "5 + 3"
            const fullExpression = expression.join('');
            let result;

            try {
                // Perform the calculation (using eval for simplicity)
                result = eval(fullExpression);
                
                // Reset the expression to the result for continued calculation (e.g., 8 + 4)
                expression = [String(result)];
                console.log("--- RESULT: ", result, "---");
                return result;
            } catch (e) {
                expression = [];
                console.error("Calculation Error. Cleared.");
                return 'Error';
            }
        },

        // Method to clear the state
        clear: () => {
            expression = [];
            _updateDisplay();
        },

        // Method to view the raw internal state for debugging
        getExpression: () => expression
    };
};

// --- Usage ---
const simpleCalc = createCalculator();

simpleCalc.inputNumber(1);
simpleCalc.inputOperator('+');
simpleCalc.inputNumber(2);
simpleCalc.inputNumber(3); // The expression is now ['1', '+', '23']
simpleCalc.calculate();     // Output: --- RESULT: 24 ---

simpleCalc.inputOperator('-');
simpleCalc.inputNumber(4);
simpleCalc.calculate();     // Output: --- RESULT: 20 ---