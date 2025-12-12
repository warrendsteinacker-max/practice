/**
 * Main curried calculator function.
 * @param {number} a - The first operand.
 */
const calculate = (a) => {
    // Stage 1: Encapsulates the first number (a)
    prompt = ('what number A do you want to +,-,*,/ ');
    a = prompt;
    /**
     * Stage 2: Takes the operator and returns a function waiting for the second number (b).
     * @param {string} op - The operation symbol ('+', '-', '*', '/').
     */
    return (op) => {
        prompt = ('what operation to do with A +,-,*,/ ');
        op = prompt;
        // Stage 2: Encapsulates the operator (op)
        
        /**
         * Stage 3: Takes the second operand and executes the final calculation.
         * @param {number} b - The second operand.
         */
        return (b) => {

            prompt = ('what number B do you want to +,-,*,/ with A ');
            b = prompt;
            // Stage 3: Executes the final logic using all encapsulated values (a, op, b)
            switch (op) {
                case '+':
                    console.log(a + b);
                    return calculate();
                case '-':
                    console.log(a - b);
                    return calculate();
                case '*':
                    console.log(a * b);
                    return calculate()
                case '/':
                    console.log(b === 0 ? 'Error: Division by zero' : a / b);
                    return calculate();
                default:
                    return NaN;
            }
        };
    };
};





// corrected function that takes one argument at a time





// Global state variables to hold the values obtained from the prompts
let operandA, operator, operandB; 

/**
 * Main function that initiates the calculation sequence.
 * It reads the first operand and returns the next function in the chain.
 */
const calculate = () => {
    
    // --- Stage 1: Get Operand A ---
    // We use the correct prompt() function and parse the result.
    const aInput = prompt('Step 1: What is the first number (A)?');
    if (aInput === null) return null; // Exit on cancel
    operandA = parseFloat(aInput);
    
    // Return the function for Stage 2 (getting the operator)
    return () => {
        
        // --- Stage 2: Get Operator ---
        const opInput = prompt('Step 2: What operation (+, -, *, /) to do with A?');
        if (opInput === null) return null; // Exit on cancel
        operator = opInput;
        
        // Return the function for Stage 3 (getting the second number and calculating)
        return () => {

            // --- Stage 3: Get Operand B ---
            const bInput = prompt('Step 3: What is the second number (B)?');
            if (bInput === null) return null; // Exit on cancel
            operandB = parseFloat(bInput);
            
            // --- Final Execution ---
            let result;
            
            // Ensure inputs are valid numbers before calculation
            if (isNaN(operandA) || isNaN(operandB)) {
                result = 'Error: Invalid number input.';
            } else {
                switch (operator) {
                    case '+':
                        result = operandA + operandB;
                        break;
                    case '-':
                        result = operandA - operandB;
                        break;
                    case '*':
                        result = operandA * operandB;
                        break;
                    case '/':
                        result = operandB === 0 ? 'Error: Division by zero' : operandA / operandB;
                        break;
                    default:
                        result = 'Error: Invalid operator.';
                        break;
                }
            }

            // Output the result and return the start of the chain.
            console.log(`Calculation: ${operandA} ${operator} ${operandB} = ${result}`);
            alert(`Result: ${result}`);
            
            // Return the initial 'calculate' function to allow a new chain to start.
            return calculate;
        };
    };
};





// Start the chain and save the reference to the next step
const step2 = calculate();

// Check if the user cancelled
if (step2) {
    const step3 = step2();
    if (step3) {
        // Run the final calculation step (which also returns 'calculate')
        const finalFunction = step3();
        
        // You can now restart the process by calling the returned function:
        // finalFunction(); 
        
        console.log("Chain complete. Type finalFunction() to start a new sequence.");
    }
}