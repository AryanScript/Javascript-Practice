// This is the code for learning global scope and local 

// var c = 300// something delcared outside the brackects is called global scope
let a = 300// this a is the global scope variable(accessable every where)
if(true) {// this brackets are called the scope '{}'
    let a = 10// this a is the local scope variable(accessable in this scope only)
    const b = 20
    var c = 30
}// someting that is declared in the brackets are called block scope

// console.log(a);
// console.log(b);
console.log(c);

// Note => var is very much problematic variable it can cause bugs and the error 

// ================================================== part 2 ==========================================================

// Nested scope

function one() {
    const username = "Aryan"
    
    function two() {
        const website = "youtube"
        console.log(username);// this can be accessable because it is in global scope
        
    }
    // console.log(website);// this can not be accessable it is in local scope
    
    // two()
}
// one()

//if else condition 
if (true) {
    const username = "Aryan"
    if (username === "Aryan") {
        const website = "youtube"
        console.log(username + website);
        
    }
    // console.log(website);// this will show error
    
}
// console.log(username);// this will show error

// ++++++++++++++++++++++++ interesting ++++++++++++++++++++

console.log(addone(5));// this will be also executed 
function addone (num) {// first method to declare 
    return num + 1
}
// console.log(addone(5));


console.log(adddtwo(5));// this will be not executed because of the way of declaration
const adddtwo = function (num) {// second method to declare 
    return num + 2
}
// console.log(adddtwo(5));
