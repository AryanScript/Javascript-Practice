// This is code for learning function and parameter

function sayMyname() {// this is way to define the function
    console.log("A");
    console.log("R");
    console.log("Y");
    console.log("A");
    console.log("N");
    
}
//sayMyname()// this is the way to call the function

// function addTwono(number1, number2) {// this is the way to give parameter to the function "(number1, number2)"
//     console.log(number1 + number2);
    
// }
// addTwono(3, 4)// this the way to give the argument to the function "(3, 4)"

function addTwono(number1, number2) {// this is showing how we can store it in variable
    // let result = number1 + number2// first way of declaring (little bit big)
    // return result
    // console.log("Aryan");// after delcaring result we can not print anything
    
    return number1 + number2// more presize way (mostly used)
}
const result = addTwono(5, 7)
// console.log("result:",result);

function loginUser(username){// this is the another way to derive a function
    // if (username === undefined) {// this is the syntax of if condition
    //     console.log("Please enter the correct username");
    //     return// this return given because further code dont execute
    // }

    if (!username) {// this is second and presize method to declare the if condition (both are same)
        console.log("Please enter the correct username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUser("Aryan"));
// console.log(loginUser());

// Note => if we not give any string in the "console.log(loginUser())" we get output undefined

// ================================================ part 2 ==========================================================

// function with objects and array

function calculateCartprice(...num1) {// this shows the use of the rest operator (..num1)
    return num1
}
// console.log(calculateCartprice(200, 300, 500, 700));// by using rest operator in gives all the argument in array form

// objects
const user = {
    username: "Aryan",
    price: 10000
}

function handleData(anyobject) {
    console.log(`the username is ${anyobject.username} and the price is ${anyobject.price}`);
    
}
// handleData(user)

handleData({// we can pass the object direclty by this method
    username: "you",
    price: 567
})

// Array
const myArray = [200, 300, 500, 700]

function handleArray(getarray) {
    return getarray [2]
}
// console.log(handleArray(myArray));
console.log(handleArray([400, 600, 800, 100]));// we can pass the Array direclty by this method





