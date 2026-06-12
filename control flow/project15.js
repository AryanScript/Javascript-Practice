// This code is for learning the control flow 

//if
const userLoggedin = true
const temperature  = 53

// if (temperature < 50) {
//     console.log("less than 50");
// }
// else{
//     console.log("temperature is greater than 50");
// }
// console.log("executed");

// != not equal to sign
// === shows the data type are equal or not including the values

// const score = 200

// if (score > 100) {
//     let power = "punch" 
//     console.log(`user power is: ${power}`);
// }


// short hand notation
// const balance = 1000

// if (balance > 500) console.log();// this is called as implicit scope but only for single console 

// if (balance < 500) {
//     console.log("less than");

// } else if (balance < 750) {
//     console.log("les than 750");

// } else if (balance < 900) {
//     console.log("less than 900");
    
// } else {
//     console.log("less than 1200");
    
// }

const UserLoggedIn = true
const debitCard = true 
const loggedInFromGoogle = false
const loggedInFromGmail = true

if (userLoggedin && debitCard) {// to check the two or three statement at same time 
    console.log("Allow to shopping");
}

if (loggedInFromGmail || loggedInFromGoogle) {// to check the multiple statement at same time
    console.log("User looged in");
}

