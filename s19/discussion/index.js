// console.log("Hello world");

// [SECTION] Non-Mutator Methods
// are functions that do not modify or change after they are created.

// indexOf()
// return the index number of the first matching elements found in the array

let countries = ["USA", "PH", "SG", "CAN", "TH", "PH", "FR", "DE"];

let firstIndex = countries.indexOf("PH");
console.log("Result of indexOf method: " + firstIndex); 

let invalidCountry = countries.indexOf("ph");
console.log("Result of indexOf method: " + invalidCountry); 

// slice()
// Portion/slice elements from an array AND returns a new array.

// Slicing off elements from the specified index (2), the last element of the array
let slicedArayA = countries.slice(2);
console.log("Result of slice method:");
console.log(slicedArayA);

// Slicing off elements from the specified index(2) to antoher index)
let slicedArayB = countries.slice(2,4);
console.log("Result of slice method:");
console.log(slicedArayB);

// Slicing off elements starting from the last element of an array
let slicedArayC = countries.slice(-3);
console.log("Result of slice method:");
console.log(slicedArayC);

// concat()
// Combines two arrays and return the combined result

let taskArrayA = ["drink HTML", "eat Javascript"];
let taskArrayB = ["inhale CSS", "breathe SASS"];
let taskArrayC = ["get GIT", "be NODE"];

let tasks = taskArrayA.concat(taskArrayB);
console.log("Result of concat method:");
console.log(tasks);

// combine multiple arrays
let allTasks = taskArrayA.concat(taskArrayB, taskArrayC);
console.log("Result of concat method:");
console.log(allTasks);

// combine arrays with element
let combinedTasks = taskArrayA.concat("smell Express", "Throw React");
console.log("Result of concat method:");
console.log(combinedTasks);

// includes()
// Check if the given argument exists in the array
// Returns true if the item exists, otherwise false

let carBrands = ["Toyota", "Nissan", "Chevrolet", "Ford"];
let isExiting1 = carBrands.includes("Ford");
let isExiting2 = carBrands.includes("Ferrari");

console.log("Result of includes method:");
console.log(isExiting1);
console.log(isExiting2);

/*
    Mini Activity (5 mins)
    1. Create an array named guestList with the names: ["Alice", "Bob", "Charlie", "David", "Eve"].
    2. Check if "Charlie" is in the guest list and print the result.
    3. Find and print the index of "David".
    4. Create a new array containing only the first and last guests, then print the result.
    5. Take a screenshot of the console output and send it in the chat.
 
    Expected output:
    Guest list: Alice,Bob,Charlie,David,Eve
    Is Charlie on the list? true
    David index number is: 3
    First and last guests: Alice,Eve
*/
let guestList = ["Alice", "Bob", "Charlie", "David", "Eve"];
console.log("Guest list: " + guestList);
let isCharlie = guestList.includes("Charlie");
console.log("Is Charlie on the list? " + isCharlie);
let davidIndex = guestList.indexOf("David");
console.log("David index number is: " + davidIndex);

// Method Chaining
let firstAndLast = guestList.slice(0,1).concat(guestList.slice(-1));
console.log("First and last guests: " + firstAndLast);