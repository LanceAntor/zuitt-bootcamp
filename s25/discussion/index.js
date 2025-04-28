// console.log("Hello CIT!");

// JSON stands for JavaScript Object Notation
    // JSON is also used in other programming languages hence the name JavaScript Object Notation

// JSON Objects
    /*
        Syntax:
        {
            "propertyA": "valueA",
            "propertyB": "valueB",
            "propertyC": "valueC"
            ....
        }
    */

// Example of JSON Objects
// {
//     "city": "Quezon City",
//     "province": "Metro Manila",
//     "country": "Philippines"
// }

// Another Example of JSON Object with embedded array as its value:
// {
//     "cities": [
//         {"city": "Quezon City", "province": "Metro Manila", "country": "Philippines"},
//          {"city": "Manila", "province": "Metro Manila", "country": "Philippines"},
//          {"city": "Makati", "province": "Metro Manila", "country": "Philippines"}

//     ]
// }

// JSON Methods
    // Stringified method - it converts our JSON object into a stringified JSON
        // Stringified JSON is a Javascript Object converted into a string to be used in other function of Javascript Application


// JSON.stingify()
let batchesArr = [{"batchName": "Batch X"}, {"batchName": "Batch Y"}];
console.log(typeof batchesArr);

console.log("Result from stringify method: ")
console.log(typeof JSON.stringify(batchesArr));
console.log(JSON.stringify(batchesArr));

let data = JSON.stringify({
    name: "John",
    age: 31,
    adress: {
        city: 'Manila',
        country: 'Philippines'
    }
})

console.log(data);

// JSON.parse()

let parseData = JSON.parse(data);
console.log("This is after parse method: ")
console.log(parseData);

let stringifiedObject = `{"name": "John", "age": 31}`;
console.log(JSON.parse(stringifiedObject));