// console.log("This is s08");

// [SECTION] Understanding Scope in Javascript
// Scope determines the accessibility and visibility of variables in Javascript

// Types of scope of Javascript

// Global Scope
// accessible from anywhere in your code
const globalVariable = "I'm a global variable"

function displayGlobal(){
    console.log(globalVariable)
}

displayGlobal();
console.log(globalVariable);

// local scope
    // // Functiion scope
    // function localFunction(){
    //     let localVariable = "I'm a local variable"
    //     console.log(localVariable);
    // }

    // localVariable();
    // console.log(localVariable);

// block scope ({} = if, for, while)
// Variables declared with let or const inside these blocks are scoped to that specific block.

{
    var blockVariable = "I am a block-scoped Variable"
    console.log(blockVariable);
}
    console.log(blockVariable);


// [SECTION] Return Statement

// allow us to output a value from a function to be passed to the line/block

//Return Statement
function returnFullName(){
    let fullName = "Jeffrey" + ' ' + "Smith" + ' ' +"Bezos";
    return fullName;
    console.log("This message will not be printed.");
}
let fullName = returnFullName();
console.log(fullName);

console.log(returnFullName());


//[SECTIION] console.log vs return statements

    function returnFullAddress(){
        let fullAddress = {
            street: "44 Marharlika St.",
            city: "Tarlac City",
            province: "Tarlac"
        }
        return fullAddress;
    }
    let myAddress = returnFullAddress();
    console.log(myAddress);

    function printPlayerInfo(){
        console.log("Username: " + "White Knight");
        console.log("Level: " + 95);
        console.log("Job: " + "Paladin");
    }

    // returns undefined because printPlayerInfo does not return any data
    // It only displays the details in the console.
    let user1 = printPlayerInfo();
    console.log(user1);

    // You can return almost any data types from a function.

    function returnSumOfNumbers(){
        return 5 + 10;
    }
    let sumOf5and10 = returnSumOfNumbers();
    console.log(sumOf5and10);

    let total = 100 + returnSumOfNumbers();
    console.log(total)

    // Simlutates getting an array user names form database
    function getGuildMembers(){
        return ["White Knight", "healer2000", "andrewthehero"];
    }

    console.log(getGuildMembers());