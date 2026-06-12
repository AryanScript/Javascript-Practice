// *This is the summary of datatypes* 


/* Primitives
these are of 7 types: strings, number, boolean, null, undefined, symbol, BigInt(it is nothing but a new scientific values or constant)*/

const score = 100
const scoreValue = 100.3

const isloggedIn =  false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 1232433534567567n


/*reference(non primitive)
Array, Objects, Function*/

const heros = ["shaktiman","naagraj","doga"];
let myObj = {
    name: "aryan",
    age: 22,
}

const myFunction = function(){
    console.log("hello world");
}

console.log(typeof anotherId);


/*1) Primitive Datatypes
    Number => number
    String  => string
    Boolean  => boolean
    null  => object
    undefined  =>  undefined
    Symbol  =>  symbol
    BigInt  =>  bigint

2) Non-primitive Datatypes
    Arrays  =>  object
    Function  =>  function
    Object  =>  object*/



// =====================================================

// Stack (premitive) , Heap (non-premitive)

let myYoutubename = "aryansinghgo"

let anotherName = myYoutubename
anotherName = "singhgo"

console.log(myYoutubename);
console.log(anotherName);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "ary@google.com"

console.log(userOne.email);
console.log(userTwo.email);