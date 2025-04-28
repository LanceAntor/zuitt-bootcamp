// console.log('s22/discussion/index.js');

/*
    Object Recall:

    1. Creating object using object literal:
        Syntax:
            let objectA = {
                keyA: valueA,
                keyB: valueB,
            };

    2. Creating object using a constructor function:
        - Useful when we need to create a several objects with different values but same properties

        Syntax:
            function ObjectName(keyA, keyB) {
                this.keyA = keyA;
                this.keyB = keyB;
            }

*/

function Laptop(name, manufactureDate){
    this.name = name;
    this.manufactureDate = manufactureDate;
}

let laptop = new Laptop('Lenovo', '2008');
console.log(laptop);


/*
    Mini-Acitivity:
        Create another instance of a Laptop Object.
        Use myLaptop as the object name. name = Macbook Air, manufactureDate = 2020

*/

let myLaptop = new Laptop('Macbook Air', '2020');
console.log(myLaptop);

// no new keyword
let oldLaptop = Laptop('Dell', '1990');
console.log(oldLaptop);


/*
    Object Methods:
        - Methods are functions within an object. They can be accessed and invoked from an object


*/

let person = {
    // properties/key
    name: 'John',
    // method
    talk: function(){
        console.log('Hello, I am ' + this.name);
    }
};
person.talk();

console.log(person);

person.walk = function(){
    console.log(this.name + ' walked 25 steps forward');
}

console.log(person);
person.walk();

/*
    Mini-Acitivity:
        Create a friend object with the following properties and methods:

        properties:
            firstname 
            lastname
            address
        method:
            introduce: "Hello my name is <firstname> <lastname>"

*/

let friend = {
    firstname: 'uvuvwevwevwe onyetenyevwe ugwemuhwem',
    lastname: 'osas',
    address: 'Uganda',
    introduce: function(){
        console.log('Hello my name is ' + this.firstname + ' ' + this.lastname);
    }
}

console.log(friend);
friend.introduce();

//Object methods can also receive arguments much like regular functions

friend.greet = function(object){
    console.log("Hi " + object.name + "!");
}

friend.greet(person)

// Real World Application of Objects - Constructor with Methods

function Student(fullname, email, age){
    // properties of our object
    this.fullname = fullname;
    this.email = email;
    this.age = age;
    this.subject = [];

    // methods
    this.enroll = function(subjectName){
        this.subject.push(subjectName);
        return "Enrolled in " + subjectName;
    }

    this.introduction = function(){
        return "Hello, I am " + fullname;
    }

}

let student1 = new Student('Jeffry Doe', "jeffdoe@gmail.com", 20);
let student2 = new Student('John Smith', "johnsmith@gmail.com, 18");

console.log(student1);
console.log(student2);