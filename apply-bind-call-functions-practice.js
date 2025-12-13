// using apply


//apply method calls the function and allows you to pass in an array of arguments

function greet(fn) {
  return fn.apply(null, ['Hello', 'man']);
}


printf = function (greeting, name) {
  return `${greeting}, ${name}!`;
}



const greetingMessage = greet(printf);
console.log(greetingMessage); // Output: "Hello, man!"

// using bind

// bind method creates a new function that, when called, has its this keyword set to the provided value