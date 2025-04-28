console.log("Hello World!");

let allStar2025 = [
    "Curry",
    "Irving",
    "Harden",
    "Jokic",
    "Wembanyama",
    "Tatum",
    "James"
];

console.log(allStar2025);

// [SECTION] Modifying Arrays
console.log("length of All-Stars 2025: ");
console.log(allStar2025.length);

// delete last item of the array
allStar2025.length = allStar2025.length - 1;

console.log("Updated length of All-Stars 2025: ");
console.log(allStar2025.length);

allStar2025.length = 0;
console.log("Updated length of All-Stars 2025: ");
console.log(allStar2025.length);

console.log("Updated length of All-Stars: ");
console.log(allStar2025);

// [SECTION] Accessing Arrays
// Elements can be access through index/number
// arrays starts at 0, and to get the last index of an array, it will be array.length - 1;

console.log(allStar2025[0]);
console.log(allStar2025[1]);

let lakersLegends = ["Kobe", "Shaq", "Lebron", "Magic", "kareem"];
console.log(lakersLegends[3]);

// save/store array items in another variable
let currentLaker = lakersLegends[2];
console.log(currentLaker);

console.log("Array before reassignment: ");
console.log(lakersLegends);

lakersLegends[2] = "Gasol";
console.log("Array after reassignment: ");
console.log(lakersLegends);


const bullsLegends = [];

bullsLegends[0] = "Jordan";
bullsLegends[1] = "Pippen";
console.log(bullsLegends);
// bullsLegends = "Rodman";

// loop through an array
for(let index = 0; index < lakersLegends.length; index++) {
    console.log(lakersLegends[index]);
}
/*
    Mini Activity: (5 mins)
    1. Create an array named numArr with the values [5, 12, 30, 46, 40].
    2. Implement a function isAllDivisibleBy5(array) that checks if all elements in the array are divisible by 5.
    3. If an element is not divisible by 5, print its index immediately.
    4. If all numbers are divisible by 5, return true; otherwise, return false.
    5. Print the result by calling isAllDivisibleBy5(numArr).
    6. Take a screenshot of the browser console and send it in the chat.
 
    Expected output:
    Not divisible by 5 at index: 1  
    Not divisible by 5 at index: 3  
    false
*/
let numArr = [5, 12, 30, 46, 40];

function isAllDivisibleBy5(array){
    let isDivisible = true;
    for(let i = 0; i < array.length; i++){
        if(array[i] % 5 !== 0){
            console.log("Not divisible by 5 at index: " + i)
            return false;
        }
    }
    return isDivisible
}
console.log(isAllDivisibleBy5(numArr));
