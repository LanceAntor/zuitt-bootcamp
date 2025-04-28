/*
    
    1. Create a function called greet.
        - The function should accept one parameter: name.
        - The function should return a string that says hello to the name provided.
        - Return the result of the string and log the returned value.
        
        - To check, create a variable to save the value returned by the function.
        - Then log the variable in the console.
            - You can also invoke the function in the console to view the returned value of the function.
                - Note: This is optional.

*/
function greet(name){
    return "Hello " + name;
}
let greeting = greet("John");
console.log(greeting);

/*
    2. Create a function called printMessage.
        - The function should accept one parameter: message.
        - Return the provided message.
        - Call the function three times with different messages and log the returned values.

        - To check, create a variable to save the value returned by the function.
        - Then log the variable in the console.
            - You can also invoke the function in the console to view the returned value of the function.
                - Note: This is optional.

*/
function printMessage(message){
    return message;
}
let firstMessage = printMessage("First Message");
let secondMessage = printMessage("Second Message");
let thirdMessage = printMessage("Third Message");

console.log(firstMessage);
console.log(secondMessage);
console.log(thirdMessage);

/*
    3. Create a function called getSquare.
        - The function should accept one parameter: num.
        - Return the square of the number.
        - Call the function with a number and log the returned value.

        - To check, create a variable to save the value returned by the function.
        - Then log the variable in the console.
            - You can also invoke the function in the console to view the returned value of the function.
                - Note: This is optional.

*/

function getSquare(num){
    return num * num
}
let squardNum = getSquare(2);
console.log(squardNum);

/*
    4. Create a function called double.
        - The function should accept one parameter: num.
        - Return the number multiplied by 2.
        - Call the function with a number and log the returned value.

        - To check, create a variable to save the value returned by the function.
        - Then log the variable in the console.
            - You can also invoke the function in the console to view the returned value of the function.
                - Note: This is optional.

*/

function double(num){
    return num * 2;
}
let multipliedNumber = double(2);
console.log(multipliedNumber);
/*
    5. Create a function called addTen.
        - The function should accept one parameter: num.
        - Return the result of adding 10 to the number.
        - Call the function with a number and log the returned value.

        - To check, create a variable to save the value returned by the function.
        - Then log the variable in the console.
            - You can also invoke the function in the console to view the returned value of the function.
                - Note: This is optional.

*/

function addTen(num){
    return num + 10;
}
let plusTen = addTen(2);
console.log(plusTen);
/*

    6. Create a function called printLine.
        - The function should accept one parameter: line.
        - Return the string "You entered: [line]".
        - Call the function with a string and log the returned value.

        - To check, create a variable to save the value returned by the function.
        - Then log the variable in the console.
            - You can also invoke the function in the console to view the returned value of the function.
                - Note: This is optional.

*/
function printLine(line){
    return "You entered: " + line;
}
let enteredLine = printLine("Functions are great!");
console.log(enteredLine);