// --- 1. The Wrapper Factory (Modified for Reset) ---
// This is the core 'once' logic that exposes a reset method.
function createOnceWrapper(fn) {
    let hasRun = false;
    let result;
    
    const limitedFunction = function(...args) {
        if (!hasRun) {
            console.log("--- LIMITED: Executing action ---");
            result = fn.apply(this, args); 
            hasRun = true;
        } else {
            console.log("--- LIMITED: Execution skipped (already run) ---");
        }
        return result;
    };
    
    // Public method to reset the state
    const resetState = () => {
        hasRun = false;
        result = undefined;
        console.log("--- RESET: Limited state cleared. ---");
    };

    return {
        handler: limitedFunction,
        reset: resetState,
        // Also expose the original function for the "Unlimited" mode
        originalFn: fn
    };
}


// --- 2. The Original Handler Function (The Core Logic) ---
// This is the function whose execution we want to limit.
function updateDisplay(event) {
    // Prevent default form submission if applicable
    if (event && event.preventDefault) {
        event.preventDefault();
    }
    
    const inputElement = document.getElementById('valueInput');
    const paragraphElement = document.getElementById('outputParagraph');
    
    const newValue = inputElement.value || "(No Value)";
    
    paragraphElement.textContent = `Current Value: ${newValue} (Updated @ ${new Date().toLocaleTimeString()})`;
    
    // Provide visual feedback on the button itself
    this.style.backgroundColor = 'lightgreen';
    this.textContent = 'Submitted!';
    
    console.log(`Action executed. New value: ${newValue}`);
}


// --- 3. Setup and Toggling Logic ---
let isLimited = true; // Start in limited mode

// Create the wrapper instance once
const limiter = createOnceWrapper(updateDisplay);

document.addEventListener('DOMContentLoaded', () => {
    const submitButton = document.getElementById('submitButton');
    const toggleButton = document.getElementById('toggleButton');

    // Initial setup: Attach the limited handler
    submitButton.addEventListener('click', limiter.handler);
    
    // Set initial text for the toggle button
    toggleButton.textContent = 'Mode: LIMITED (Click to switch)';


    // Function to handle the mode toggle
    toggleButton.addEventListener('click', () => {
        // 1. Remove the existing handler
        submitButton.removeEventListener('click', isLimited ? limiter.handler : limiter.originalFn);

        // 2. Toggle the state
        isLimited = !isLimited;
        
        // 3. Reset the limiter state and visual feedback
        limiter.reset();
        submitButton.style.backgroundColor = '';
        submitButton.textContent = 'Submit Value';

        // 4. Attach the NEW handler
        if (isLimited) {
            submitButton.addEventListener('click', limiter.handler);
            toggleButton.textContent = 'Mode: LIMITED (Click to switch)';
            console.log("--- Switched to LIMITED Mode ---");
        } else {
            submitButton.addEventListener('click', limiter.originalFn);
            toggleButton.textContent = 'Mode: UNLIMITED (Click to switch)';
            console.log("--- Switched to UNLIMITED Mode ---");
        }
    });
});