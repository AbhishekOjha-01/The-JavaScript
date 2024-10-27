// In JavaScript, arrays are used to store multiple values in a single variable. They can hold a variety of data types, including numbers, strings, objects, and even other arrays. Here’s a quick overview of how to work with arrays in JavaScript:

// Creating Arrays
// 1. Using Array Literals:

const fruits = ['apple', 'banana', 'orange'];
console.log(fruits);

// 2. Using the Array Constructor:

const numbers = new Array(1, 2, 3, 4);
console.log(numbers);

// Accessing Elements

// You can access elements using their index (zero-based):

console.log(fruits[0]); // 'apple'

// Modifying Arrays

// Adding elements:

// 1. push() adds to the end:

fruits.push('mango');
console.log(fruits);

// 2. unshift() adds to the beginning:

fruits.unshift('strawberry');
console.log(fruits);

// Removing elements:

// 1. pop() removes from the end:

fruits.pop();
console.log(fruits);

// 2. shift() removes from the beginning:

fruits.shift();
console.log(fruits);

// Array Methods

// JavaScript arrays come with many built-in methods:

// 1. Iteration

fruits.forEach((fruit) => {
    console.log(fruit);
});

// 2. Mapping

const lengths = fruits.map(fruit => fruit.length);

// 3. Filtering

const longFruits = fruits.filter(fruit => fruit.length > 5);

// 4. Finding

const foundFruit = fruits.find(fruit => fruit === 'banana');

// Array Length

// You can check the number of elements in an array using the length property

console.log(fruits.length);

// Multidimensional Arrays

// You can create arrays of arrays:

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(matrix);

// Spread and Rest Operators

// Spread Operator: Expands an array into its elements:

const moreFruits = ['kiwi', ...fruits];

// Rest Operator: Collects multiple elements into an array:

function collect(...args) {
    return args;
}

/**
 * 1. Learn more about arrays in js.
 */