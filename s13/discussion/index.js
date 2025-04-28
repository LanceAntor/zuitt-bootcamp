console.log("HELLO WORLD");

// [SECTION] While Loops
/*
    - A while loop takes expression/condition 
    - "Iteration" the term given to the repition of statements.
    - Syntax:
        while (expression) {
            // Statements
        }
*/

let count = 5;
while (count !== 0) {
    console.log("While: " + count);
    count--;
}

// [SECTION] Do While Loops
/*

*/
function doWhileLoop(number) {
    do{
        console.log("Do While: " + number);
        number += 1;
    }while(number < 10);
}
doWhileLoop(5);
doWhileLoop(10);

/*

    Mini Activity (5 mins)

    1. Create a countdown that starts at 10 and prints only odd numbers afterward.
    2. Store the number 10 in a variable named "num".
    3. When the countdown reaches 1, print "Done!".
    4. Take a screenshot of the output in the browser console and send it in the chat.

    Expected output:
    10  
    9  
    7  
    5  
    3  
    1  
    Done!

*/


let num = 10;
console.log(num);
while (num > 1){
    num--;
    if(num % 2 !== 0){
        console.log(num);
    }

}
console.log("Done!");