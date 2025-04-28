// Multiple Parameters
/*
    - In JS, providing more/less arguments than the expected parameters
    will not return an error.
    - Providing less arguments than the expected parameters will automatically assign
*/
function createFullName(firstName, middleName, lastName){
    console.log(firstName + ' ' + middleName + ' ' + lastName);
}
createFullName("Juan", "Dela", "Cruz");
createFullName("Juan", "Dela");
createFullName("Juan", "Dela", "Cruz", "Hello");

// Using variable as arguments
let firstName = "John";
let middleName = "Doe";
let lastName = "Smith";
createFullName(firstName, middleName, lastName);


function printFullName(middleName, firstName, lastName){
    console.log(firstName + ' ' + middleName + ' ' + lastName);
}
printFullName("Juan", "Dela", "Cruz");

function mult(){
    let message = "Hello World!"
}
console.log(message);