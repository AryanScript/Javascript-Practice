// This code is for learning high order array loops in javascript

// for of loop

// ["","",""] //normal array
// [{},{},{}] //array of objects

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
    // console.log(num);
}

const greetings = "hello world";
for (const greet of greetings) {
    // console.log(`each char of is: ${greet}`);
}

// maps

const myMap = new Map();
myMap.set("IN", "India")
myMap.set("US", "United States")
myMap.set("UK", "United Kingdom")

// console.log(myMap);

for (const [key, value] of myMap) {//this form is used to destructure the key and value from the map
    console.log(key, ":-", value);
}

const myObj = {
    'game': 'cricket',
    'country': 'India',
    'player': 'Virat Kohli'
}

// for (const [key, value] of myObj) { //this will not work because objects are not iterable
//     console.log(key, ":-", value);
// }

const myObject = {
    js: 'JavaScript',
    py: 'Python',
    rb: 'Ruby'
}

for (const key in myObject) { //this will work because we are using for in loop which is used to iterate over the properties of an object
    console.log(`${key} shortcut for ${myObject[key]}`);
}

const programmingLanguages = ['JavaScript', 'Python', 'Ruby', 'Java', 'C++'];
for (const lang in programmingLanguages) {//when we use for in loop on an array it will give us the index of the array elements
    console.log(programmingLanguages[lang]);
}

for (const key in Map) { //this will not work because Map is not an object
    console.log(key);
}