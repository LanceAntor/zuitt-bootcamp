console.log("S09 Discussion!")

// Function
/*
    Syntax:
        function functioName(parameter){
            // code to be executed
        }

        functionName(argument);
*/

function printName(name){
    console.log("my name is " + name);
}
printName("Lance");
printName("John");

let sampleName = "Jane";
printName(sampleName);

function checkDivisibilityBy8(num){
    let remainder = num % 8;
    console.log("The remainder of " + num + " divided by 8 is" + remainder);
    let isDivisibleBy8 = remainder === 0;
    console.log("Is " + num + " divisible by 8?");
    console.log(isDivisibleBy8);
    // if(num % 8 === 0){
    //     return true;
    // } else {
    //     return false
    // }
}
checkDivisibilityBy8(100)

