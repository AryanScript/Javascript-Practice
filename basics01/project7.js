//  This code is for learning the numbers and maths

const score = 400  //this is the normal way to declare string or number
// console.log(score);

const balance = new Number(100)  //this is the way to declare only number
// console.log(balance);

// console.log(balance.toString());  //it changes the number into a string
// console.log(balance.toFixed(2)); //it represent the decimal value till we want

const otherNumber = 47.3656

// console.log(otherNumber.toPrecision(3));  //it changes the number into significant digit or round off the number

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));  //it converts the hundreds into commas form and by default comes in US standards


// ================================== Maths ===================================================================================


// console.log(Math);
// console.log(Math.abs(-6));  //it changes the negative value into positive value and positive stays same
// console.log(Math.round(4.6));  //it round off the value
// console.log(Math.ceil(5.7));  //it always gives the higher value 
// console.log(Math.floor(8.7));  //it always gives the lower value
// console.log(Math.min(2, 5, 7, 9));  //it finds the minimum value of array
// console.log(Math.max(5, 7, 23, 6));  //it finds the maximum value of the array

console.log(Math.random());  //it gives the random value between 0 and 1
console.log(Math.random()*10 + 1);  //it will shift the decimal and gives value 0< and >10

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);  //this is a formula of random check



