// JavaScript has a robust set of features for working with numbers and performing mathematical operations. Here’s a quick overview:

// Basic Number Operations

// You can perform standard arithmetic operations using operators:

let a = 10;
let b = 5;

console.log(a + b);        
console.log(a - b); 
console.log(a * b);    
console.log(a / b);    
console.log(a % b);

// Math Object

// JavaScript provides a built-in Math object that includes useful properties and methods for more advanced math operations:

// Common Methods

console.log(Math.abs(-5));          // Absolute value: 5
console.log(Math.ceil(4.2));       // Round up: 5
console.log(Math.floor(4.7));      // Round down: 4
console.log(Math.round(4.5));      // Round to nearest: 5
console.log(Math.max(1, 2, 3));    // Maximum: 3
console.log(Math.min(1, 2, 3));    // Minimum: 1
console.log(Math.random());        // Random number between 0 and 1

// Power and Square Root

console.log(Math.pow(2, 3));
console.log(Math.sqrt(4));

// Working with Integers and Floats
// JavaScript can sometimes produce unexpected results with floating-point arithmetic due to its handling of numbers. 

// For example:

console.log(0.1 + 0.2); // 0.30000000000000004

// To mitigate this, you might round the result:

let sum = (0.1 + 0.2).toFixed(2); // "0.30"
console.log(sum);

// Number Conversion

// You can convert strings to numbers using:

let str = "123";
let num = Number(str);      // Converts string to number
let parseIntNum = parseInt(str); // Parses a string and returns an integer
let parseFloatNum = parseFloat("3.14"); // Parses a string and returns a floating-point number

// Checking for Numbers

// You can check if a value is a number using isNaN() and typeof:

let value = "Hello";
console.log(isNaN(value)); // true
console.log(typeof value === 'number'); // false

// Simple Calculator Function

function calculator(a, b, operation) {
    switch(operation) {
        case 'add':
            return a + b;
        case 'subtract':
            return a - b;
        case 'multiply':
            return a * b;
        case 'divide':
            return b != 0 ? a / b : 'Error: Cannot divide by zero';
        default:
            return 'Invlaid operation';
    }
}

console.log(calculator(10, 5, 'multiply'));

/**
 * 1. Perform more operations on 'Math'.
 */