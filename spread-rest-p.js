// array varible that spread has to be first applied to make func not throw error
const arr = [1, 2, 3, 4, 5];
// using spread operator to pass array elements as individual arguments to the function
function sum(a, b, c, d, e,f,g) {
  return a + b + c + d + e + f + g;
}

const total = sum(...arr,6,7);
console.log('Sum using spread operator:', total); // Output: 15 dose not throw error