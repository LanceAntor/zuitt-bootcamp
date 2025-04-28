console.log("Hello World!, It's me again!");

// Best practices in naming variables

// 1. Descriptive
let movieTitle = "The Godfather"; // good variable name
let x = "aiah"; // bad variable name

// 2. Start with lowercase letter
let LastName = "Smtih"; // bad variable - PascalCase
// PascalCase is usually used for classes and/or constructors
// console.log(LastName);
let lastName = "Smith"

// 3. Do not spaces to your variable name. Use specific naming convention (camelCase or snake_case or
// kebab-case)
// let first name = "Mike";
// camelCase
let firstName = "Mike";

console.log(firstName)

let email_address = "mikesmith@gmail.com";

// 4. Avoid using variable with a reserved keyword.
// let new = "New Addition";
// console.log(new);

// Using the "=" or assignment operator, We can reassign a value to variables created using let.
let productName = "desktop computer";
productName = "Alienware Aurora";
console.log(productName);

// This allow us to declare variables without initial value, then add value later.
let productPrice;
productPrice = 120000;
console.log(productPrice);

// const
// should not be changed
const interest = 3.539;
// interest = 4.489
console.log(interest);

// nawalan kami ng internet kaya wala na ako nakapag lecture


let myGrades = {
    firstGrading: 98.7,
    secondGrading: 92.1,
    thirdGrading: 90.2,
    fourthGrading: 94.6
}
console.log(myGrades)