- [Variables](#variable)
    - [Variable Declaration](#variable-declaration)
    - [Variable Initialization](#variable-initialization)
    - [Variable Scope](#variable-scope)
    - [Variable Hoisting](#variable-hoisting)
- [Difference between var, let and const](#var-let-const)
- [Data Types](#data-types)(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)
    - [Primitive Data Types](#primitive-data-types)
    - [Non-Primitive Data Types](#non-primitive-data-types)
- [Operators](#operators)
    - [Spread Operator](#spread-operator)


# Variables

A variable is a named reference (storage location) for value/data. The actual value is stored in the memory. The variable is just a reference to where the value is actually stored. Variables are used to store any type of date such as numbers, strings, boolean, undefined, objects and array. 

## Variable Declaration

To use a variable, one must learn how to create it i.e. declaring a variable. Javascript has three kinds of variable declarations:

1. var
2. let
3. const

There are a few rules to follow in javascript while declaring variables:

1. Variables names can only container letters ( A - Z, a - z ), numbers ( 0 - 9 ), dollar sign ( $ ) and underscores ( _ ). They cannot contain spaces or any other special characters.
2. Variable names must start with a letter, dollar sign, or underscores. They cannot start with a number.
3. Variable names are case sensitive. This means the 'name' and 'Name' are considered to be two different variables.
4. Variables names cannot be the same as keywords or reserved words in Javascript.

**Example: some of legal names(indicators)**

```js
let Variable, variable, variable_one, _variable, $variable, variable1;
```

There are two ways you can declare a variable

1.  With the keyword *var*. This syntax can be used to declare both local and global variables.
2.  With the keyword *const* and *let*. This syntax can be used to declare a block scope local variable and they can also be used to declare global variables.

**Example:**

```js
var a;
let b;
const c = 'Hello World';
```
## Variable Initialization

Variable initialization is the process of assigning/giving a value to the variable. In *var* and *let* initializing a vlaue is optional but not in *const*. Initialization is usually done when the variable is declared.
*= 1* part of the statement is called initialization.

```js
var x = 1;
var y = 2;
const z = 3;
```

## Variable Scope

In Javascript, there are two types of variable scope:

1. Global scope
2. Local/Block scope

Global scope refers to the context in which the variable is declared outside of any function or block of code. Variables declared in global scope are accessible from anywhere in your code.

Local scope refers to the context in which the variable is declared inside a function or block of code. Variables defined in local scope are only visible within that function of block of code, and are not accessible form outside it.

**Example:**

```js
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

        let p = 4;
    }
    console.log(o); // Outputs: 3
    console.log(p); // Throws an error: p is not defined: 
} 
```
## Variable Hoisting

Variable hoisting is a behavior that occurs when a variable is declared after it has been called/used. When a variable is declared with *var* the declaration is hoisted to the top of the current scope. This mean that, even if you declare a variable after you use it in the code, the variable will still be accessible.

However, this behavior does not occurs with variabled declared with *let* and *const*.

**Example:**

```js
console.log(hoist); // Outputs: undefined
var hoist = 10; 

console.log(letHoist); // Throws error: Cannot access 'letHoist' before initialization
let letHoist = 10;
```
Here, the output is undefined because javascript only hoists the declaration and not the initialization.

# var-let-const

*var* is the older way of declaring variables but it is still supported and used. *let* and *const* were introduced in the ES6 to fix issues with *var* like:

1. *var* allows variables to be redeclared.
2. *var* does not have block-level scope.

| var                                                                              | let                                               | const                                               |
| -------------------------------------------------------------------------------- | ------------------------------------------------- | --------------------------------------------------- |
| var has local/function scope and global scope                                    | let has local scope, global scope and block scope | const has local scope, global scope and block scope |
| It can be updated or re-declared                                                 | It can be updated or re-declared                  | It can not be updated or re-declared                |
| It can be declared with initialization                                           | It can be declared with initialization            | It can not be declared without initialization       |
| var declaration are hoisted, meaning they can be accessed without initialization | let variable are not hoisted                      | const variable are not hoisted and it cannot be accessed without initialization, as it cannot be declared without initialization.                    |

**Example:**
```js
// difference between var, let and const
console.log(isVar); // Outputs: undefined
var isVar = 22;

console.log(lsLet); // Uncaught ReferenceError: lsLet is not defined
let isLet = 11;
isLet = 22;
console.log(isLet); // Outputs: 22

console.log(isConst); // Uncaught ReferenceError: Cannot access 'isConst' before initialization
const isConst = 12;
isConst = 22;
console.log(isConst); // Uncaught TypeError: Assignment to constant variable.
```

# Data Types

In javascript data types describe the properties of the data. Data types can be divided into two:

1. Primitive data types
2. Non-primiative data types

## Primitive data types

In javascript, a primitive data type is a data type that is not an object and has no methods. There are six primitive data types:

1. Numbers - Integers, float
2. Strings - Any data under single quote, double quotes or backtick quote
3. Boolean - true or false
4. Null - empty value or no value
5. Undefined - a declared variable without any value
6. Symbol - A unique value that can be generated by Symbol() constructor

Primitive data types are immutable( non-modifiable ). Once a primitive data type is created we cannot modify them.

**Example:**

```js
let word = 'Hello World';
word[0] = 'h';
console.log(word) // Outputs: Hello World
```

Primitive data types are compared by their values. 

**Example:**

```js
let num1 = 1;
let num2 = 1;

console.log(num1 == num2); // Outputs: true

let firstName = 'Madan';
let lastName = 'G.C';

console.log(firstName == lastName); // Outputs: false

let boolean1 = false;
let boolean2 = false;

console.log(boolean1 == boolean2); // Outputs: true
```

Primitive data types also do not have methods like objects. However, we can still use methods on all the primitive data types except null and undefined. All primitive data types, except *null* and *undefined* have their corresponding object wrapper types, which provide usefull methods for working with primitive values, this behavior is known as *primitive wrapping*

## Non-Primitive Data Types

Non-primitive data types are modifiable or mutable. We can modify the value of non-primitive data types after it gets created.

Let us see by creating an array. An array is a list of data values in a square bracket. Arrays can contain the same or different data types.

Array values are referenced by their index. In Javascript array indes starts at zero. i.e., the first elements of an array is found at index 0, the second element ar index one, and the third element at index two, etc. 

Non-primitive data types includes:
1. Objects
2. Array
3. Functions

**Example:**

```js
let nums = [1, 2, 3, 'one', 'two', 'three'];
nums[0] = 10;

console.log(nums);      // [10, 2, 3, 'one', 'two', 'three']
```
As you can see, an array, which is a non-primitive data type is mutable.

Non-primitive data types cannot be compared by value. Even if two non-primitive data types have the same properties and values, they are not strcitly equal.

**Example:**

```js
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
```

Rule of thumb, we do not compare non-primitive data types. Do not compare arrays, function, of objects.

*Non-primitive values are referred to as reference types, because they are being compared by reference instead of value. Two objects are only striclty equal if they refer to the same underlying object.*

# Operators

Operators are special symbol used to perform operations on operands( values and variables ). Operators can be classified into the following categories.

1. Arithematic operators: performs arithmetic on numbers ( +, -, *, /, % )
2. Comparison operators: used to compare two values and return a boolean ( ==, ===, !=, !==, >, <, >=, <= )
3. Logical operators: used to perform logical operations ( &&, ||, ! )
4. Assignment operators: used to assign values to variables ( =, +=, -=, *= , /= )
5. Conditional ( ternary ) operator: it is a shorthand way to write an if-else statement.
6. Comma operator: ( , ) evaluates both of its operands and returns the value of the last operand. This operator is mainly used inside a *for* loop, to allow multiple variables to be updated each time through the loop.
7. Unary operators: used to perform operations on a singlr operand ( value or variable) ( typeof, delete )
8. Spread operator: expands an iterable ( array, string ) into individual elements

```js
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

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
console.log([...arr1, ...arr2]);  // [1, 2, 3, 4, 5, 6]

```

## Spread Operator

The spread operator is used to expand an iterable ( array, string ) into individual elements

1. Spread operator can be used to create a new array that includes all the elements of an existing array

**Example:**

```js
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5, 6];
console.log(arr2);  // [1, 2, 3, 4, 5, 6]

```

2. Spread operator can be used to pass the elements of an array as arguments to a function

**Example:**

```js
let numbers = [1, 2, 3];
console.log(Math.max(...numbers));  // 3

```

3. You can even use the spread operator to split a string into individual characters

**Example:**

```js
let str = "hello";
console.log([...str]);  // ["h", "e", "l", "l", "o"]
```fan 

4. To concatenate two arrays

**Example:**

```js
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [...arr1, ...arr2];
console.log(arr3);  // [1, 2, 3, 4, 5, 6]
```