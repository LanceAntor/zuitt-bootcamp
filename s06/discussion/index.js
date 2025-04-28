// console.log("hello")

// [SECTION] JS Type Coercion
// automatically changes one value type to another.

let numA = '10';
let numB = 12;

// - Add/concatenate a  string and a number, it will result as a a string;

let coercion = numA + numB;
console.log(coercion);
console.log(typeof coercion);

coercion = numA * numB;
console.log(coercion);
console.log(typeof coercion);

// -Adding a boolean to a number, will result to a number. true is change to 1
let coercionTrue = true + 1;
console.log(coercionTrue);
console.log(typeof coercionTrue);

// -Adding a boolean to a number, will result to a number. false is change to 0
let coercionFalse = false + 1;
console.log(coercionFalse);
console.log(typeof coercionFalse);

// Arrays (and objects) are compared by reference (memory address), not by the value.

let coercionObj = [] == [];
console.log("coercionObj: " + coercionObj);

// [SECTION] Comparison Operators

// Strict Equality Operator (===)
    // -Checks whether the operands are equal and have the same content
    //  AlSO COMPARES the data types of 2 values.

console.log(1 === 1);
console.log(1 === 2);
console.log(1 === '1');
console.log(0 === false);

// Strict Inequality Operator(!==)
console.log(1 !== 1);
console.log(1 !== 2);
console.log(1 !== '1');
console.log(0 !== false);

// [SECTION] Comparison Operator 
// - checks one value if greater or less  than to other values

let a = 50;
let b = 65;

// Greater than operator
let isGreaterThan = a > b;

// Less than operator
let isLessThan = a < b;

// Greater than or equal to;
let isGorEqual = a >= b;

// Less than or equal to:
let isLorEqual = a <= b;

console.log(isGreaterThan);
console.log(isLessThan);
console.log(isGorEqual);
console.log(isLorEqual);

let numStr = '50';
console.log(a >= numStr); // true - force coercion to change string to a number
console.log(b <= numStr); // false - 65 is not less than or equal to 50

let str = 'twenty';
console.log(b >= str); // false, Since the string is not numeric, it will converted to a number,
                        //  and it will result to a NaN (Not a number), is greater than 65
// NaN - result of unsuccessful conversion from string to a number of an alpha numeric string.
console.log(b * str);

// [SECTION] Logication Operator
let isLegalAge = true;
let isRegistered = false;

// Logical AND operator (&&), returns true if all operands are true
let allRequirements = isLegalAge && isRegistered;
console.log("Result of logical AND Operator: " + allRequirements);

// Logical OR operator (||)
// returns true if one of the operand is true
let someRequirementsMet = isLegalAge || isRegistered;
console.log(someRequirementsMet)

// Logical Not Operator (!)
let someRequirementNotMet = !isRegistered;
console.log("Result of Logical Not Operator: " + someRequirementNotMet)