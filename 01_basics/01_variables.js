// In JavaScript, variables are used to store data values and can be declared using three keywords: var, let, and const.

/* 1. var

Scope: Function-scoped or globally scoped.
Redeclaration: Can be redeclared within the same scope.
Usage: Older way to declare variables, now less preferred.

2. let

Scope: Block-scoped, meaning it's only accessible within the block it is defined.
Redeclaration: Cannot be redeclared in the same scope.
Usage: Preferred for variables that may change.

3. const

Scope: Block-scoped, like let.
Redeclaration: Cannot be redeclared or reassigned.
Usage: Used for variables that should remain constant (e.g., constants, configuration values).*/

const accountId = 123456789
let accountEmail = "xyz@gmail.com"
var accountPassword = "12345"
accountCity = "West Bengal"

// Changing const
// accountId = 2 It is not allowed.
console.log(accountId);

// Changing other variables

accountEmail = "abc@gmail.com"
accountPassword = "010101"
accountCity = "Bengaluru"

// Rather than printing each of them one by one we can use a table format

console.table([accountEmail, accountId, accountCity])


/**
 * 1. We avoid using var due to the problem of scope.
 * 2. Always think wisely before declaring a variable(name, type).
 * 3. Js is a safe language as if we don't provide variable type so it doesn't throw errors. 
 * 4. It simply understands it undefined.
 * 5. And, we should avoid it.(always state the variable type.)
 */