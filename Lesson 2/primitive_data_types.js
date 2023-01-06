let word = 'Hello World';
word[0] = 'h';
console.log(word) // Outputs: Hello World

let num1 = 1;
let num2 = 1;

console.log(num1 == num2); // Outputs: true

let firstName = 'Madan';
let lastName = 'G.C';

console.log(firstName == lastName); // Outputs: false

let boolean1 = false;
let boolean2 = false;

console.log(boolean1 == boolean2); // Outputs: true

let nums = [1, 2, 3, 'one', 'two', 'three'];
nums[0] = 10;

console.log(nums);      // [10, 2, 3, 'one', 'two', 'three']

// comparing non-primitive data types

let numbers1 = [1, 2, 3]
let numbers2 = [1, 2, 3];

console.log(numbers1 == numbers2);       // false

let userone = {
    name: 'Ashish',
    role: 'learing',
    country: 'Nepal'
}

let usertwo = {
    name: 'Ashish',
    role: 'learing',
    country: 'Nepal'
}

console.log(userone == usertwo);        // false