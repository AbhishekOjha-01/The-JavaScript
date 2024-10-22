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