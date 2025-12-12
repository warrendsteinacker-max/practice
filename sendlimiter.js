/**
 * Factory function that wraps another function (fn) and provides a way to execute it once,
 * plus a public method to reset its 'hasRun' state.
 *
 * @param {Function} fn The function to be limited.
 * @returns {Object} An object containing the limited function and a reset method.
 */
function createOnceWrapper(fn) {
    // PRIVATE STATE (The Closure Context)
    let hasRun = false;
    let result;
    
    // The limited function (The actual click handler)
    const limitedFunction = function(...args) {
        if (!hasRun) {
            console.log("--- LIMITED: Running original function ---");
            // Use apply() to pass the clicked element ('this') and arguments
            result = fn.apply(this, args); 
            hasRun = true;
        } else {
            console.log("--- LIMITED: Skipped execution (already run) ---");
        }
        return result;
    };
    
    // The reset function (exposed publicly)
    const resetFunction = () => {
        hasRun = false;
        result = undefined;
        console.log("--- RESET: Limited function state has been reset. ---");
    };

    // Return the public interface
    return {
        // The function the button will call
        handler: limitedFunction,
        // The function the reset button will call
        reset: resetFunction
    };
}


// --- 2. The Original Handler Function ---
// This function will be wrapped and limited.
function handleButtonClick(clickedElement) {
    // 1. Access the element's ID
    const buttonId = clickedElement.id; 
    
    // 2. Modify the element's content 
    clickedElement.textContent = "Clicked! (Limited)";
    
    console.log(`Button ID: ${buttonId}`);
    
    // 3. For demonstration: change the color
    clickedElement.style.backgroundColor = 'salmon';
}


// --- 3. Setup and Binding ---

// Create the wrapper instance once
const limitedHandlerInstance = createOnceWrapper(handleButtonClick);

// Assign the 'handler' method to the global scope for the HTML onclick
const buttonHandler = limitedHandlerInstance.handler;
const resetHandler = limitedHandlerInstance.reset;

// We also need a way to pass the element in the HTML
// The 'buttonHandler' must be wrapped in another function to pass 'this' from HTML:
function wrapHandler(clickedElement) {
    // Call the limited handler, making sure 'this' refers to 'clickedElement'
    limitedHandlerInstance.handler.call(clickedElement, clickedElement);
}

// Function to attach the reset button's logic (optional, but cleaner)
function resetState() {
    resetHandler();
    // Reset the appearance of the limited button
    const limitedButton = document.getElementById('limited-button');
    if (limitedButton) {
        limitedButton.textContent = 'Limited Button (Click Once!)';
        limitedButton.style.backgroundColor = '';
    }
}