//console.log("HELLO WORLD!");

// [SECTION] Exponent Operator



/*

    Mini Activity #1 (5 mins)

    1. Create an array named numbers containing 5 random between 1 and 20.

    2. Print the original numbers array before transformation.

    3.Use an array iteration method to transform each number based on the following rules:

        - If the number is even, raise it to the power of its index.

        - If the number is odd, raise it to the power of (index + 1).

    4. Store the transformed values in a new array named transformedNum and print the final result.

    5. Take a screenshot of the console output and send it in the chat.
 
    Expected output:

    Random numbers:

    [2, 19, 13, 4, 5]
 
    Transformed numbers:

    [1, 361, 2197, 64, 3125]

*/
 
let numbers = [2, 19, 13, 4, 5];
console.log("Random numbers:");
console.log(numbers);

let transformedNum = numbers.map((num, index) => {
    if(num % 2 === 0){
        return Math.pow(num,index);
    } else {
        return Math.pow(num, index + 1);
    }
})

console.log("Transformed numbers:");
console.log(transformedNum);


// [SECTION] Template Literals
// Allow us to write string without using the concatenation operator (+)

let name = "Tolits";

// Pre-Template Literal String
// Single or Double Quote
let message = "Hello " + name + "! Welcome to programming!";
console.log("Message without template literal: " + message);

// String using Template Literals
// uses backticks (``);
message = `helo ${name}! Welcome to programming!`;
console.log(`Message without template literal: ${message}`);

// Multi-line using template literals
const anotherMessage = `
    ${name} attended a math competition.
    He won it by solving the problem 8 raises to 2 with the soulution of 64.
`

console.log(anotherMessage);

// allow us to write string with embedded expressions.
const interestRate = .1;
const pricipal = 1000;

console.log(`The interest on your savings is :  ${pricipal * interestRate}`);

/*
    Mini Activity #2 (5 mins)
    1. Create an array named students containing three objects. 
       Each object should have the following properties: 
       - name (string)
       - age (number)
       - hobby (string)
 
    2. Use an iteration method to generate a multi-line introduction for each student using template literals.
 
    3. Print each multi-line introduction separately in the browser console.
 
    4. Take a screenshot of the console output and send it in the chat.
 
    Expected Output:
    Array of student objects:
    [
        { name: "Alice", age: 22, hobby: "painting" },
        { name: "Bob", age: 24, hobby: "gaming" },
        { name: "Charlie", age: 20, hobby: "reading" }
    ]
 
    Multi-line introduction:
    "Alice is 22 years old.
    They enjoy painting."
 
    "Bob is 24 years old.
    They enjoy gaming."
 
    "Charlie is 20 years old.
    They enjoy reading."
*/
let students = [
    { name: "Alice", age: 22, hobby: "painting" },
    { name: "Bob", age: 24, hobby: "gaming" },
    { name: "Charlie", age: 20, hobby: "reading" }
];
console.log("Array of student objects:");
console.log(students);

console.log("Multi-line introduction:");
const introductions = students.map(student => 
    `${student.name} is ${student.age} years old.
    They enjoy ${student.hobby}.`
);
console.log(introductions);

introductions.forEach(intro => console.log(`"${intro}"`));

// [SECTION] Array Destructuring
// Allow us to name array elements with variables instead of using index numbers.

// const fullName1 = ["Juan", "Dela", "Cruz"];

// // Pre-Array Destructuring
// console.log(fullName1[0]);
// console.log(fullName1[1]);
// console.log(fullName1[2]);

// console.log(`Hello ${fullName1[0]} ${fullName1[1]} ${full1Name1[2]}! It's is nice to meet you!`);

// // Array Destructuring
// const [firstName, middleName, lastName] = fullName1;

// console.log(firstName);
// console.log(middleName);
// console.log(lastName);

// console.log(`Hello ${firstName} ${middleName} ${lastName}! It's is nice to meet you!`);

// [SECTION] Object Destructuring
// Shortens the syntax for accessing properties from objects.

let person = {
    givenName: "John",
    maidenName: "Doe",
    familyName: "Smith"
};

// Pre-Object Destructuring
console.log(person.givenName);
console.log(person.maidenName);
console.log(person.familyName);

console.log(`Hello ${person.givenName} ${person.maidenName} ${person.familyName}! It's is nice to meet you!`);

// Object Destructuring
let {givenName, maidenName, familyName} = person;

console.log(givenName);
console.log(maidenName);
console.log(familyName);

console.log(`Hello ${givenName} ${maidenName} ${familyName}! It's is nice to meet you!`);

// Destructure in the function parameter
function getFullName({givenName, maidenName, familyName}){
    console.log(`${givenName} ${maidenName} ${familyName}`);
}
getFullName(person);


/*
    Mini Activity #3 (10 mins)
    1. Create an object named employee with the following properties:
        - fullName (John Doe)
        - department (Software Engineering)
        - projects (array of project objects, each with title and duration in months)
            - title: "Inventory System", duration: 6 
            - title: "Mobile Food Delivery App", duration: 8
            - title: "E-commerce Website", duration: 12
        - skills ("JavaScript", "UI/UX", "AWS Cloud Computing")
    2. Destructure the following values from the employee object:
        - Extract fullName and department directly.
        - Extract the first project’s title and duration.
        - Extract only the last skill from skills using array destructuring.
    3. Swap the first and last project in the projects array using destructuring.
    4. Print the extracted values and the updated projects array to the console.
    // Expected Output
    Employee Name: John Doe
    Department: Software Engineering
    First Project: Inventory System (6 months)
    Last Skill: AWS Cloud Computing
    Updated Projects Array:
    [
    { title: "E-commerce Website", duration: 12 },
    { title: "Mobile Food Delivery App", duration: 8 },
    { title: "Inventory System", duration: 6 }
    ]
*/
 // create an object
let employee = {
    fullName: "John Doe",
    department: "Software Engineering",
    projects: [
        { title: "Inventory System", duration: 6 },
        { title: "Mobile Food Delivery App", duration: 8 },
        { title: "E-commerce Website", duration: 12 }
    ],
    skills: ["JavaScript", "UI/UX", "AWS Cloud Computing"]
};

// destructuring
const { fullName, department, projects, skills } = employee;
const { title: firstProjectTitle, duration: firstProjectDuration } = projects[0];
const [, , lastSkill] = skills; 

// swap
[projects[0], projects[2]] = [projects[2], projects[0]];

// display
console.log(`Employee Name: ${fullName}`);
console.log(`Department: ${department}`);
console.log(`First Project: ${firstProjectTitle} (${firstProjectDuration} months)`);
console.log(`Last Skill: ${lastSkill}`);
console.log("Updated Projects Array:");
console.log(projects);