// The Outer Function (The Factory/Module)
const Calculator = () => {
    // 1. Encapsulated Data (Hidden State)
    let count = [];

    // 2. The Private Function (Protected Logic)
    // This is f_private(x) in your formula. It is inaccessible outside of createSafeCounter.
    const _validateOperationAndIncrement = (amount) => 
        
        {count.push(amount);
        return (func) => {
        // Protected validation logic: cannot increment by a negative number
        if (func === 'add') {
            count += amount;
            return true;
        }
        return false;
    };

    // 3. The Public Interface (The Returned Object)
    // This function returns the publicly accessible methods (f)
    return {
        // The Public Function (The Wrapper)
        increase: (value) => {
            // This public method is the only way to call the private function
            if (_validateAndIncrement(value)) {
                console.log(`Count increased by ${value}.`);
            } else {
                console.log(`Invalid value: ${value}. Count remains unchanged.`);
            }
        },

        getCount: () => {
            return count;
        }
    };
};