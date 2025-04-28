// console.log("Hello kalibutan");

// [SECTION] if, else if and else statement
 
let numG = -1;

//if statement
// Executes if the statement is true
if(numG < 0){
    console.log("Hello");
}

numG = 0;

if(numG < 0){
    console.log("Hello");
}

// else if clause
let numH = 1;
if(numH < 0){
    console.log("Hello");
} else if(numH > 0){
    console.log("World");
}

// else statement
// Executes the statement if all other conditions are false
if(numH < 0){
    console.log("Hello");
} else if(numH == 0){
    console.log("World");
} else {
    console.log('Again');
}
// Mini Activity (5 mins):
// // 1. Create a function determineTyphoonIntensity(windSpeed) that returns a message based on wind speed:// < 30: "Not a typhoon yet."// 30 - 61: "Tropical depression detected."// 62 - 88: "Tropical storm detected."// 89 - 117: "Severe tropical storm detected."// 118+: "Typhoon detected."
// // 2. Test the function with console.log().// console.log(determineTyphoonIntensity(224)); // Expected: "Typhoon detected."
// // 3. Take a screenshot of your browser console showing the function’s output.
// // 4. Send the screenshot in the chat.
function determineTyphoonIntensity(windSpeed){
    if(windSpeed < 30){
        return "Not a typhoon yet.";
    } else if (windSpeed > 30 && windSpeed < 61){
        return "Tropical depression detected.";
    } else if (windSpeed > 62 && windSpeed < 88){
        return "Tropical storm detected.";
    } else if(windSpeed > 89 && windSpeed < 117){
        return "Severe tropical storm detected.";
    } else {
        return "Typhoon detected.";
    }
}

// console.warn is a good way to print warning in our console that could help developers to act on a certain output of the code.

let message = determineTyphoonIntensity(90);

if(message == "Severe tropical storm detected."){
    console.warn(message);
}

if("false"){
    console.log(true);
} else {
    console.log(false);
}

// [SECTION] Truthy and Falsy Values
/*
    - a value is considered true when encountered in a Boolean context.
    - values are considered true unless defined otherwise
    - Falsy values/exceptions for Truthy values:
        1. False
        2. 0
        3. -0
        4. ""
        5. null
        6. undefined
        7. NaN
*/

// Truthy 
if(true){
    console.log("truthy");
}
if(1){
    console.log("truthy");
}
if({}){
    console.log("truthy");
}

// Falsy
if(false){
    console.log("falsy");
}
if(0){
    console.log("falsy");
}
if(undefined){
    console.log("falsy");
}

// [SECTION] Terinary Operator

    // can be used as an alternative to if else statement. 
    // single statement execution, wherein the result is consists of only one line of code.
    // have an implicit return statement, withouth return keyword.
    // Syntax: (expression) ? ifTrue : ifFalse

// Single statement execution
let ternaryResult = (1 < 18) ? true : false;
console.log("Result of ternary operator: ", ternaryResult);

// Multiple statement execution
let name;
let age = 19;

function isOfLegalAge(){
    name = "John";
    return "You are of legal age limit.";
}
function isUnderAge(){
    name = "Jane";
    return "You are under age limit.";
}
let legalAge = (age > 18) ? isOfLegalAge() : isUnderAge();
console.log("Result of ternary operator: "+ legalAge + ", " + name);

