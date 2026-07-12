// This code is for learning high order array loops in javascript

// for of loop

// ["","",""] //normal array
// [{},{},{}] //array of objects

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
    console.log(num);
}

const greetings = "hello world";
for (const greet of greetings) {
    console.log(`each char of is: ${greet}`);
}

// maps

const myMap = new Map();
myMap.set("IN", "India")
myMap.set("US", "United States")
myMap.set("UK", "United Kingdom")

console.log(myMap);

