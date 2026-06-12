// This code is for learning the THIS keyword and Arrow function

const user = {
    username: "Aryan",
    website: "youtube",

    welcomeYou: function () {
        console.log(`${this.username}, welcomes you in youtube channel`);// we use THIS keyword in current context only
        console.log(this);// this will give th value and keys of current context
        
    }
}// the content in the curly braces are called current context

// user.welcomeYou()
// user.username = "pan"// here we changed the context(value)
// user.welcomeYou()

// console.log(this);// this will refer to empty object when we are in node environment

// function chai() {
//     // console.log(this);// when we call this keyword in the current context it gives the many performance valuation
//     let username = "Aryan"
//     console.log(this.username);// this will give undefined because this keyword not works in function
    
// }

// const chai = function() {// in this method of function we also get undefined 
//     let username = "Aryan"
//     console.log(this.username);
    
// }

const chai = () => {// in this method of function we also get undefined (Arrow function)
    let username = "Aryan"
    console.log(this.username);
    
}
// chai()

//Arrow function (not used as method)
// const addTwo = (num1, num2) => {// basic arrow function 
//     return num1 + num2
// }

// const addTwo = (num1, num2) => (num1 + num2)// this is called implicit return in which we let the return keyword (Arrow function)
// console.log(addTwo(3, 4));

// Note => if we wrap it in {} braces we have to delcare the return keyword and if wrap it in () or nothing no need of return keyword

const addTwo = (num1, num2) => ({username: "Aryan"})// () are used to wrap the objects also
console.log(addTwo(3, 4));