// useing map and comparing it to foreach

// diffrence between map and foreach foreach is lop that breaks after iterating over each element
// map creates a new array with the results of calling a provided function on every element in the calling array 


const numbers = [1, 2, 3, 4, 5];

const doubledWithMap = numbers.map((num) => num * 2);

numbers.forEach((num, index, arr) => {
  arr[index] = num * 2;
  console.log(arr[index]);
});



console.log('Doubled with map:', doubledWithMap);
console.log('Original array after forEach:', numbers);



// using reduce

// reduce method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log('Sum using reduce:', sum);

// using filter
// filter method creates a new array with all elements that pass the test implemented by the provided function.

const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log('Even numbers using filter:', evenNumbers);