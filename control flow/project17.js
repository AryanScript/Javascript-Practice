// This is code for learning tthe truth and false statement

const userEmail = "A@aryan.ai"

if (userEmail) {
    console.log("Got user email");
    
} else {
    console.log("didnt find the user email");//this will execute when the string is empty in the declaraton 
    
}

// falsy value 

// false, 0, -0, BigInt, "", null, undefined, NaN

// truthy value

// "0", "false", " ", "[]", "{}"

// if (userEmail.length === 0) {
    // consle.log("user email is empty");
// }

const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
    console.log("object is empty");
}

// Nullish coalescing operator (??): null defined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
val1 = undefined ?? 10
val1 = null ?? 10 ?? 20


console.log(val1); // Output: 5

// ternary operator

// condition ? expressionIfTrue : expressionIfFalse

const age = 18;
age >= 18 ? console.log("Yes, can vote") : console.log("No, cannot vote")
