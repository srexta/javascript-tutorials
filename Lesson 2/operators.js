// Arithmetic operators

let a = 10;
let b = 2;

console.log(a + b); // Outputs: 12
console.log(a - b); // Outputs: 8
console.log(a * b); // Outputs: 20
console.log(a / b); // Outputs: 5

// Comparison operators

console.log(a == b); // false
console.log(a === b); // false
console.log(a != b); // true
console.log(a !== b); // true
console.log(a < b); // false
console.log(a > b); //true
console.log(a <= b); // false
console.log(a >= b); // false

// logical operators

let x = true;
let y = false;
console.log(x && y);  // false
console.log(x || y);  // true
console.log(!x);  // false

// Assignment operators

let z = 0;
// z = z + 10; 
z += 10; // 10
z -= 5;  // z is now 5
z *= 2;  // z is now 10
z /= 2;  // z is now 5

// Ternary operator

let m = 10;
let n = 20;

let max = (m < n) ? m : n;
console.log(max);

let q = 10;
let r = 20;

let maximum;
if (q > r) {
    maximum = q;
} else {
    maximum = r;
}
console.log(maximum);  // 20

// Unary operator

let num = 20;
console.log(typeof num); // number

// spread operator

// create new array
let array1 = [1, 2, 3];
let array2 = [...array1, 4, 5, 6];
console.log(array2);  // [1, 2, 3, 4, 5, 6]

// pass array elements as arguments
let numbers = [1, 2, 3];
console.log(Math.max(...numbers));  // 3


// split string
let str = "hello";
console.log([...str]);  // ["h", "e", "l", "l", "o"]

// concatinate arrays
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [...arr1, ...arr2];
console.log(arr3);  // [1, 2, 3, 4, 5, 6]

// type coercion
// let stri = 'one';
// let numb = 1;
// let add = stri + numb;
// console.log(add); // one1
// let minus = stri - numb;
// console.log(minus);


let num1 = 'one';
let num2 = 1;
console.log(num1 == num2);