// console.log("Hello WOrld!");

// List all the graduating stutents from a class
let studentsNumberA = "2020-1923";
let studentsNumberB = "2020-1924";
let studentsNumberC = "2020-1925";
let studentsNumberD = "2020-1926";
let studentsNumberE = "2020-1927";

let studentNumbers = [
    "2020-1923",
    "2020-1924",
    "2020-1925",
    "2020-1926",
    "2020-1927",
];

// [SECTION] Array
// used to store multiple values in a single variable
// declared using square brackets ([]) are also known as "array literals"
// Arrays also provides a number of methods to help you manipulate and iterate over the data stored in them.

let grades = [90, 80, 70, 60, 50];

//let mixedArray = [12, "Asus", null, undefined, {}]; // this will work but not recommended

console.log(grades);
//console.log(mixedArray);

// Write an array in serapte lines fo readability
let myTasks = [
    "drink html",
    "eat javascript",
    "inhale css",
    "bake sass"
];
console.log(myTasks);

let city1 = "Tokyo";
let city2 = "Manila";
let city3 = "Jakarta";

let cities = [city1, city2, city3];
console.log(cities);

let arr = [];
arr[3] = "Hello";
console.log(arr);
console.log(arr.length);

// [SECTION] Array .length property
// .length property allows us to get and set the total number of items in an array

let blankArr = [];
console.log(blankArr.length);

/*
    Mini Activity: (5 mins)
    1. Create a fruit array with the elements: ["apple", "banana", "cherry"].
    2. Print the initial value of the fruit array.
    3. Remove the last element of fruit array.
    4. Print the updated fruit array and its length.
    5. Take a screenshot of the browser console and send it in the chat.
 
    Expected output:
    Initial Fruit Array: apple,banana,cherry
    Initial Fruit Array Length: 3
    Updated Fruit Array: apple,banana
    Updated Fruit Array Length: 2
*/
let fruits = ["apple", "banana", "cherry"];
console.log("Initial Fruit Array: " + fruits);
console.log("Initial Fruit Array Length: " + fruits.length);
fruits.length -= 1;
console.log("Updated Fruit Array: " + fruits);
console.log("Updated Fruit Array Length: " + fruits.length);

// Array with functions
function displayLength(array) {
    console.log(array.length);
}

displayLength(myTasks);
displayLength(["Jeff", "Jenny", "Jill"]);
