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
const person = {
  firstName: 'John',
  lastName: 'Doe',
    getFullName: function() {
    return `${this.firstName} ${this.lastName}`;
    }
};
const getFullName = person.getFullName.bind(person);
console.log(getFullName()); // Output: "John Doe"      


// using call

// call method calls a function with a given this value and arguments provided individually 
function introduce(city, country) {
  return `My name is ${this.firstName} ${this.lastName} and I live in ${city}, ${country}.`;
}