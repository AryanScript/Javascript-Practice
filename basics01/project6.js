// This code is for learning Strings

const name = "Aryan"
const repoCount = 3

//console.log(name + repoCount + "Value"); //This is the old method

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);    //new method of combining the string

const gameName = new String('aryanss')

// console.log(gameName[0]);  // it shows the index number of string
// console.log(gameName.__proto__);  //it shows the prototype of string

// console.log(gameName.length);  //it shows the total length of the string
// console.log(gameName.toUpperCase());  //it converts the string in capital letter

console.log(gameName.charAt(2));  //it shows that which character is in index no. 2
console.log(gameName.indexOf('r'));  //it shows that character r is in which index no.

const newString= gameName.substring(0, 4)  //it shows that which characters are there in between the index
console.log(newString);

const anotherString = gameName.slice(-6, 4)  //it slices the character between the limits
console.log(anotherString);

const newStringOne = "  aryan  "
console.log(newStringOne);
console.log(newStringOne.trim());  //it removes the extra spaces in the string

const url = "https://aryan.com/aryan%18singh"

console.log(url.replace('%18','-'));  // used to replace something from string

console.log(url.includes('you'));  //used to check the presence of a charater in the string

console.log(gameName.split('-')); //shows the character is split by something and converts it in the form of array