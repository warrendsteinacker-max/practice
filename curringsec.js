// The Curried Function
const addClassOnEvent = (className) => (event) => (element) => {
  element.addEventListener(event, () => {
    element.classList.toggle(className);
    console.log(`Class '${className}' toggled on ${event} event.`);
  });
};

// --- Partial Application Step 1: Fix the class name ---
// Create a specialized utility to highlight any element
const highlightElement = addClassOnEvent('highlight'); 
jjjjjjj
// --- Partial Application Step 2: Fix the event type (click) ---
// Create a more specialized utility to highlight on click
const highlightOnClick = highlightElement('click');

// --- Final Application ---
// Get an element (assuming you have a button with id="myButton")
const button = document.getElementById('myButton');

// 4. Apply the final argument (the element)
highlightOnClick(button); 
// Now, every time 'myButton' is clicked, the 'highlight' class is added.