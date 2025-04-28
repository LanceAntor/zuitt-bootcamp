// console.log("Hello World!");

// [SECTION] Array Manipulation with Array Methods
// built-in functions and methods for arrays, wherein it allow us to manipulate and access array items
// Three kinds of array methods:
// 1. Non-mutators allow us to manage and perform tasks on an array without updating the contents of the orginal array.
// 2. Iterator Methods allow us to loop over elements/items in an array and perform task with them.
// 3. Mutator Methods allow us to manage and perform tasks on an array by updating the contents of the original array.

// [SECTION] Mutator Methods
// Adding and removing items from an array

let fruits = ["Apple", "Orange", "Kiwi", "Dragon Fruit"];
console.log("Curent Array: ");
console.log(fruits);
console.log(fruits.length);

// push() - adds an item to the end of an array

let fruitsLength = fruits.push("Mango");
console.log("push() method returns the new length of the array: " + fruitsLength);
console.log("Mutated Array from push method: ");
console.log(fruits);
console.log(fruits.length);

// add multiple elements to an array
fruits.push("Avocado", "Guava");
console.log("Mutated Array from push method: ");
console.log(fruits);
console.log(fruits.length);

// let's try a function 
function addFruit(fruit){
    fruits.push(fruit);
}

addFruit("Pineapple");
console.log("Mutated Array from push method: ");
console.log(fruits);
console.log(fruits.length);

// pop() - removes the last item from an array AND returns the removed element.

let removedFruit = fruits.pop();
console.log("Mutated Array from pop method: ");
console.log(fruits);
console.log(fruits.length);

function removeFruit(){
    fruits.pop();
}

removeFruit();
console.log("Mutated Array from pop method: ");
console.log(fruits);
console.log(fruits.length);

// splice()
// Simultaneously remove and elements from a specified index number and adds elements
// Syntax: arrayName.splice(start, deleteCount, elementsToBeAdded);

let spliceFruits = fruits.splice(1, 2, "Lime", "Cherry");
console.log(spliceFruits);
console.log("Mutated Array from slice method: ");
console.log(fruits);

function customSpliceFruits(index, deleteCount, fruit){
    fruits.splice(index, deleteCount, fruit);
}
customSpliceFruits(1, 1, "Avocado");
customSpliceFruits(2, 1, "Durian");
console.log("Mutated Array from splice method: ");
console.log(fruits);

/*
    Mini Activity (5 mins)
    1. Create an array named guestList with the following names: ["Alice", "Bob", "Charlie", "David"]. Print the initial array.
    2. "Eve" arrives and should be placed between "Alice" and "Bob". Print the updated array.
    3. "Charlie" decides to leave. Print the updated array.
    4. The last guest on the list also decides to leave.  Print the updated array.
    5. Print the final length of guestList.
    6. Take a screenshot of the browser console and send it in the chat.

    Expected Output:
    ["Alice", "Bob", "Charlie", "David"]
    ["Alice", "Eve", "Bob", "Charlie", "David"]
    ["Alice", "Eve", "Bob", "David"] 
    ["Alice", "Eve", "Bob"] 
    Final guest list length: 3
*/
let guestList = ["Alice", "Bob", "Charlie", "David"];
console.log(guestList);

guestList.splice(1, 0, "Eve");
console.log(guestList);

guestList.splice(3, 1);
console.log(guestList);

guestList.pop();
console.log(guestList);

console.log("Final guest list length: " + guestList.length);

