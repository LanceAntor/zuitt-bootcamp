// console.log("hello")

//[Section] Arithmetic Operator

let x = 1397;
let y = 7831;

let sum = x + y;
console.log("Result of addition operator: " + sum);

let difference = x - y;
console.log("Result of subtraction operator: " + difference);

let product = x * y;
console.log("Result of multiplication operator: " + product);

let quotient = x / y;
console.log("Result of division operator: " + quotient);

// [SECTION] Assigment Operator (=)

// assignement operator assigns value of right operand to a variable.
let assignmentNumber = 8;

assignmentNumber = assignmentNumber + 2;
console.log("Result of additiion assignemnt operator: " + assignmentNumber);

// Short hand for assignment number
assignmentNumber += 2;
console.log("Result of additiion assignemnt operator: " + assignmentNumber);

// -=, *=, 
assignmentNumber -= 2;
console.log("Result of subtraction assignemnt operator: " + assignmentNumber);

// [SECTION] Increment and Decrement (++,--)
// Operator that add or subtract values by 1 and reassign the value of the variable where the
// the increment/decrement applied
let z = 1;

let incremenet = ++z;
// Pre-increment (++z): Increment first, then return new value
console.log("Result of a pre-incremenet: "+ incremenet);
console.log("Result of a pre-incremenet: " + z)

incremenet = z++;
// Post-increment (z++): Returns the orignal value, then increment.
console.log("Result of a post-incremenet: "+ incremenet);
console.log("Result of a post-incremenet: "+ z)

let decrement = --z;
console.log("Result of pre-decremenet: " + decrement);
console.log("Result of pre-decremenet: " + z);

decrement = z--;
console.log("Result of pre-decremenet: " + decrement);
console.log("Result of pre-decremenet: " + z);