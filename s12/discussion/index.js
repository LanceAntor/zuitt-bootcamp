// console.log("Hello world");

// [SECTION] Switch Case Statement
// is used to perform different action based on different conditions
// alternative to using multiple if statements
/*
    Syntax:
    switch(expression) {
        case x:
            // code block
            break;
        case y:
            // code block
            break;
        default:
            // code block
    }
*/
let day = "Monday";

switch (day) {
    case "Monday":
        console.log("Start of the week");
        break;
    case "Friday":
        console.log("End of the week");
        break;
    case "Saturday":
    case "Sunday":
        console.log("Weekend Time");
        break;
    default:
        console.log("It's just another day");
}

let grade = "A";
function evaluateGrade(grade) {
    switch (grade) {
        case "A":
            return "Excellent work!";
        case "B":
            return "Good job!";
        case "C":
            return "You can do better.";
        case "D":
            return "Try harder next time.";
        default:
            return "Invalid grade.";
    }
}
// Mini Activity (3 mins)
// Create a switch statement that evaluates a student's grade (A, B, C, D, or others).
// "A": "Excellent work!"
// "B": "Good job!"
// "C": "You can do better."
// "D": "Try harder next time."
// Any other grade: "Invalid grade."
// Run the code in your browser console.
// Take a screenshot of the output and send it in the chat.


// When to use switch over if
    //switch when checking specific, fixed values (better readability)
    // if-else when checking for complex conditions or comparison(more flexible)

// [SECTION] Try Catch Finally statement
    // try catch are commonly used to handle errors handling
    // "finally" is used to specify a response that is used to handle/resolved errors

    function showIntensityAlert(windSpeed){
        try{
            // line of code with error
            alertat(determineTyphoonIntensity(windSpeed));
        } catch(error){
            console.log(typeof error);

            console.warn("Error: " + error.message);
        } finally{
            // alert("Intensity update will show new alert")
        }
    }
    showIntensityAlert(56);

    console.log("This line of code will still run");


    