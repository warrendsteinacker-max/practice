/**
 * Main curried calculator function.
 * @param {number} a - The first operand.
 */
const calculate = (a) => {
    // Stage 1: Encapsulates the first number (a)
    
    /**
     * Stage 2: Takes the operator and returns a function waiting for the second number (b).
     * @param {string} op - The operation symbol ('+', '-', '*', '/').
     */
    return (op) => {
        // Stage 2: Encapsulates the operator (op)
        
        /**
         * Stage 3: Takes the second operand and executes the final calculation.
         * @param {number} b - The second operand.
         */
        return (b) => {
            // Stage 3: Executes the final logic using all encapsulated values (a, op, b)
            switch (op) {
                case '+':
                    return a + b;
                case '-':
                    return a - b;
                case '*':
                    return a * b;
                case '/':
                    return b === 0 ? 'Error: Division by zero' : a / b;
                default:
                    return NaN;
            }
        };
    };
};

firstnum = calculate(10);

firstnum('+')(10) // returns 20
firstnum('-')(5)  // returns 5
firstnum('*')(3)  // returns 30
firstnum('/')(2)  // returns 5