let value = 50

// How to check the data type.

console.log(typeof value)   // or
console.log(typeof (value))

value = "50"
console.log(typeof (value))

// Data type conversion

let valueInNumber = Number(value)
console.log(typeof(valueInNumber))

// previously, the datatype of value was string but using Number(...),we converted String into Number. Same applies for String also, but we have to cautious regarding NaN.

// "50" --> 50
// "50xyz" --> NaN i.e Not a Number
// true --> 1, false --> 0
// null --> 0
// "Abhishek" --> NaN
// undefined --> NaN

let output = 0
let booleanOutput = Boolean(output)
console.log(booleanOutput)

// It is false for 0 only, for any other value, it is true.

// 1 --> true, 0 --> false
// "" --> false
// "Abhishek" --> true

let num = 60

let stringNum = String(num)
console.log(stringNum)
console.log(typeof (stringNum))

/**
 * OPERATIONS
 */

// JavaScript offers a wide range of operations you can perform, ranging from basic arithmetic to more complex functions and methods. Here’s a breakdown of some key operations:

/* 1. Arithmetic Operations
Addition: +
Subtraction: -
Multiplication: *
Division: /
Modulus: % (remainder) */

let a = 10;
let b = 3;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a ** b); // power 
console.log(a / b);
console.log(a % b);

/* 2. String Operations
Concatenation: Using + to combine strings.
Template Literals: Using backticks ` for multi-line strings or variable interpolation. */

let firstName = "Abhishek";
let lastName = "Kumar Ojha";
let fullName = firstName + " " + lastName;
console.log(fullName);

/* 3. Comparison Operations
Equal: == (loose) and === (strict)
Not Equal: != (loose) and !== (strict)
Greater than: >
Less than: <
Greater than or equal to: >=
Less than or equal to: <=
*/

console.log(5 == '5') // true (loose equality)
console.log(5 === '5'); // false (strict equality) checks the data type also
console.log(5 > 3);
console.log(5 != 3);

/* 4. Logical Operations
AND: &&
OR: ||
NOT: !
*/

let x = true;
let y = false;
console.log(x && y);
console.log(x || y);
console.log(!x) // false


/* 5. Bitwise Operations
AND: &
OR: |
XOR: ^
NOT: ~
Left Shift: <<
Right Shift: >>
*/

let m = 3;  // 0101 in binary
let n = 5; // 0011 in binary
console.log(m & n); // 1 (0001 in binary)


/* 6. Assignment Operations
Basic Assignment: =
Addition Assignment: +=
Subtraction Assignment: -=
Multiplication Assignment: *=
Division Assignment: /= 
*/

let number = 10;
number++;
console.log(number);
number += 5;
console.log(number);
number--;
console.log(number);
number *= 10;
console.log(number);
number -= 5;
console.log(number);

/* 7. Ternary Operator
A shorthand for if-else statements. */

let age = 18;
let canDrive = age >= 18 ? "Yes" : "No";
console.log(canDrive);

/* 8. Array Operations
Push: Adds an item to the end.
Pop: Removes the last item.
Shift: Removes the first item.
Unshift: Adds an item to the beginning.
Map, Filter, Reduce: Functional methods for manipulating arrays. */

let arr = [1,2,3,4,5];
arr.push(10);
console.log(arr);
arr.pop();
console.log(arr);
let doubledArr = arr.map(x => x * 2);
console.log(doubledArr);


/* 9. Object Operations
Creating Objects: Using {} or new Object().
Accessing Properties: Dot notation (obj.prop) or bracket notation (obj['prop']). */

let student = {
    name: "Abhishek",
    age: "20",
    department: "B.Tech",
    stream: "CSE"
};
console.log(student);
console.log(student.department);


/* 10. Functions
You can define functions using function declarations, expressions, or arrow functions. */

function add(a, b) {
    return a + b;
}

// another way 

const subtract = (a,b) => a - b;

console.log(add(5, 2));
console.log(subtract(5, 2));

// Some interesting cases
console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");
console.log(3 + 4 - 5 * 7); // avoid writing messy code like this, instead use parentheses wisely.

console.log(+true); // first conversion of boolean into number
console.log(+""); // empty string --> false --> 0

console.log("2" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

console.log(undefined == 0)
console.log(undefined > 0)
console.log(undefined < 0)

/**
 * 1. Focus on logic part.
 * 2. Write clean code.
 * 3. Study about conversions, comparisions and operatios well.
 */