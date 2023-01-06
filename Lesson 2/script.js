// legal names for variable
let Variable, variable, variable_one, _variable, $variable, variable1;
console.log(Variable);

// declaring variables
var a;
let b;
const c = 'Hello World';

// initializing variables
var x = 1;
var y = 2;
const z = 3;


// variable scope
let m = 1; // m is a global variable (has global scope)

function fun() {
    let n = 2;  // n is local variable (has block scope)
    console.log(m); // Outputs: 1
    console.log(n); // Outputs: 2

    if (true) {
        var o = 3;
        /**
         * variabled created with var are not block-scoped, but only local scope to the function (or global scope) that the block resides within.
         */

        // let p = 4;
    }
    console.log(o); // Outputs: 3
    // console.log(p); // Throws an error: p is not defined: 
}

fun();
console.log(m); // Outputs: 1
// console.log(n); // Throws an error: Uncaught ReferenceError: n is not defined

// variable hoisting

// console.log(hoist); // Outputs: undefined
var hoist = 10;

// console.log(letHoist); // Throws error: Cannot access 'letHoist' before initialization
let letHoist = 10;

// difference between var, let and const
console.log(isVar); // Outputs: undefined
var isVar = 22;

// console.log(lsLet); // Uncaught ReferenceError: lsLet is not defined
let isLet = 11;
isLet = 22;
console.log(isLet); // Outputs: 22

// console.log(isConst); // Uncaught ReferenceError: Cannot access 'isConst' before initialization
const isConst = 12;
isConst = 22;
console.log(isConst); // Uncaught TypeError: Assignment to constant variable.

