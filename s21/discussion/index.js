// console.log("Hello World");

// [SECTIION] JavaScript Object
    // An object is data type that is used to represent real world objects.
    // collection of related data and/or functionalities.
    // objetcs are presented in a "key:value" pair.
    // Different data types may be stored in an object's properties creating complex data structures.

// Create object using object literals
    // "{}" this called object literals
    // This creates/declares an object and also initializes/asssigns it's properties upon creation

let cellphone = {
    name: "Iphone 16",
    manufacturerDate: "2024"
};
console.log("Result from creating using object literals {}: ");
console.log(cellphone);
console.log(typeof cellphone);

// Accessing object properties
    // {.} dot notation

console.log("Result from dot notation: " + cellphone.name);
console.log("Result from dot notation: " + cellphone.manufacturerDate);

// Initializing/Adding/Deleting/Reassigning Object Properties

// We can update object properties and its values
cellphone.manufacturerDate = "9-20-2024";
console.log(cellphone.manufacturerDate);

// Accessing a property that does not exist within an object results undefined
console.log("Result from dot notation: " + cellphone.price);

// Add new properties to an object using dot notation
cellphone.price = 54990;
console.log(cellphone.price);

let newCellphone = cellphone;
newCellphone.name = "Samsung s24"; // Assigned by reference for objects
console.log(newCellphone.name);

let car = {};
console.log(car);
// Initialize/adding object properties using dot notation.
car.name = "Honda Civic";

console.log("Result from after adding new property using dot notation: ");
console.log(car);

// we can also add access property via array literals
console.log(car["name"]);

// add property using array literals
car["ManufactuingDate"] = "12-01-20";
console.log(car);

// console.log(car."ManufactuingData: "); // Error
console.log(car.ManufacturedDate)
console.log(car["ManufactuingDate"]);

// Delete object properties
delete car["ManufactuingDate"];
console.log(car);

// Arrays inside objects
let cart = {
    userId: "2000-1A",
    username: "michaelShawn",
    products: ["bread", "cheese", "lettuce"],
    dateCreated: "03-10-2025"
}

console.log(cart.products);
cart.products.pop();

console.log(cart.products);
console.log(cart.products.length);


/*
    Mini Activity (5 mins) - until 2:00 pm
 
    1. Create an object named student with the following properties:
        name: "Alice"
        age: 20
        course: "Computer Science"
        grades: [85, 90, 78] 
    2. Print the initial student object.
    3. Add a new property hobbies with an array of at least two hobbies.
    4. Update the course property to "Software Engineering".
    5. Remove the age property.
    6. Add a new grade (95) to the grades array.
    7. Print the final student object.
    8. Take a screenshot of the console output and send it in the chat.
 
    Expected Output:
 
    Initial student object: 
    {name: 'Alice', age: 20, course: 'Computer Science', grades: Array(3)}
 
    Final student object: 
    {name: 'Alice', course: 'Software Engineering', grades: Array(4), hobbies: Array(2)}
 
*/
let student = {
    name: "Alice",
    age: 20,
    course: "Computer Science",
    grades: [85, 90, 78]
}
console.log("Initial student object: ");
console.log(student);

student.hobbies = ["reading", "swimming"];  
student.course = "Software Engineering";
delete student.age;
student.grades.push(95);

console.log("Final student object: ");
console.log(student);