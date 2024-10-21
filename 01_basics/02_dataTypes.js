/* JavaScript has several built-in data types, which can be categorized into two main groups: primitive types and object types.

Primitive Data Types

1.Number: Represents both integer and floating-point numbers (e.g., 42, 3.14).
2.String: A sequence of characters enclosed in single, double, or backticks (e.g., 'hello', "world", `template literal`).
3.Boolean: Represents a logical entity with two values: true or false.
4.Undefined: A variable that has been declared but not assigned a value. Its default value is undefined.
5.Null: A special value that represents "no value" or "empty." It is an object type but indicates the intentional absence of any object value.
6.Symbol: A unique and immutable primitive value, often used as an identifier for object properties.
7.BigInt: Represents integers larger than the maximum safe integer limit (e.g., 1234567890123456789012345678901234567890n).

Object Data Type

1.Object: A collection of key-value pairs. Objects can store multiple values and are more complex than primitive types. Examples include arrays, functions, and user-defined objects.*/

"use strict"; // This line is used to treat all JS code as newer version.

// alert(123 + 321) // as we are using node.js not browser so this alert will not work.

// alert is use to show pop-up on the user's window.

let name = "Abhishek"
let age = 18
let isEmpty = false
let state = "" // undefined
// let state = null // not allowed

// number :- 2^53
// bigint :- 
// string :- ""
// boolean :- true/false
// null :- standalone value, representation of empty value
// undefined :- variable is declared but value is not assigned.
// symbol :- unique

console.log(typeof "abhishek"); // string
console.log(typeof age); // number
console.log(typeof undefined); // undefined
console.log(typeof null); // object

/**
 * 1. We should always try to write clear code and maintain code readability.
 * 2. Strings are written in double quotes.
 * 3. Without double quotes, it is treated as Number.
 */