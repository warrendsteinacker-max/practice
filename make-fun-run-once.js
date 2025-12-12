//using normal clouser mehtode

/**
 * Creates a function that restricts the execution of the given function (fn)
 * to only one time. Subsequent calls will be ignored.
 *
 * @param {Function} fn The function to wrap.
 * @returns {Function} The wrapped function (the closure).
 */
const creatSendingLimiter = function(fn) { 
    let hasRun = false;
    let result;
    
    // The closure uses the rest parameter to capture all incoming arguments
    return function(...args) { 
        
        if (!hasRun) {
            
            // EXECUTION WITHOUT apply():
            // 1. We use the spread operator to pass all arguments captured by ...args
            // 2. NOTE: This approach does NOT preserve the 'this' context,
            //    which is why 'apply' is generally preferred.
            result = fn(...args); 
            
            hasRun = true;
        } 
        
        return result;
    };
};









// using fn apply polyfill

/**
 * Creates a function that is restricted to invoking func once. 
 * Subsequent calls to the created function return the result of the first invocation.
 *
 * @param {Function} fn The function to wrap.
 * @returns {Function} Returns the new restricted function (the closure).
 */
function once(fn) {
    // 1. CLOSURE CONTEXT (The Private State)
    // These variables are created ONCE when 'once(fn)' is called, and are 
    // permanently accessible only to the returned function.
    let hasRun = false; 
    let result;
    
    // 2. THE WRAPPED FUNCTION (The Closure)
    return function(...args) {
        // 'this' inside this wrapper refers to the object or context
        // from which the wrapper was called.
        
        if (!hasRun) {
            // Condition for the first run:
            
            // EXECUTION: Use fn.apply(this, args) to correctly handle:
            // a) The execution context ('this').
            // b) All arguments (via the 'args' array).
            result = fn.apply(this, args);
            
            // Lock the state for all subsequent calls
            hasRun = true;
        } 
        
        // Always return the stored result of the first execution
        return result;
    };
}




//button click func
/**
 * Handles the click event, receiving the clicked button element.
 * * @param {HTMLElement} clickedElement The button element that was clicked.
 */
function handleButtonClick(clickedElement) {
    // 1. Access the element's ID
    const buttonId = clickedElement.id; 
    
    // 2. Access the text inside the button
    const buttonText = clickedElement.textContent; 
    
    // 3. Access a custom data attribute
    const buttonValue = clickedElement.getAttribute('data-value'); 
    
    // 4. Modify the element's content (e.g., change the text)
    clickedElement.textContent = "Clicked!";
    
    console.log(`Button ID: ${buttonId}`);
    console.log(`Button Text: ${buttonText}`);
    console.log(`Data Value: ${buttonValue}`);
    
    // For demonstration: change the color
    clickedElement.style.backgroundColor = 'lightblue';
}