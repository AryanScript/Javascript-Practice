//  This code is for learning Array

// Array

const myArr = [0, 1, 2, 3, 4, 5]
//console.log(myArr[1]);// this one shows the index no. of array 

const myArr2 = new Array(1, 4, 5, 8)// this is the new method of declaring an array
//console.log(myArr2[2]);

// ========================= Array method ============================================

// myArr.push(6)// this adds the values to the array
// myArr.push(7)
// myArr.pop()// this removes the last element of the array     
// myArr.unshift(9)// this add an element on index no.0 and shift the other element from there place
// myArr.shift()// this removes the unshift element from the array

// console.log(myArr.includes(9));// this shows that the element 9 is existing in array or not, and gives answer in boolean

// const newArr = myArr.join()// this binds the element of an array and converts into a string

// console.log(myArr);
// console.log(newArr);

// =============================== Slice and Splice =======================================

// console.log("A",myArr);

// const myn1 = myArr.slice(1, 4)// this gives only the range element excluding last range and do not change original array(inserts from index 1)
// console.log(myn1);
// console.log("B",myArr);

// const myn2 = myArr.splice(1, 4)// this also gives the range element including last range and changes the original array(inserts from index 1)
// console.log(myn2);
// console.log("C",myArr);

// ========================================================= part 2 ========================================================================

const marvel_heros = ["Ironman", "Hulk", "Thor"]
const dc_heros = ["Batman", "Superman", "Flash"]

// marvel_heros.push(dc_heros)// this practice consolidate or merge the two arrays in one
// console.log(marvel_heros);

// const all_heros = marvel_heros.concat(dc_heros)// this is also merging array but for making new array without problem
// console.log(all_heros);

// const all_new_heros = [...marvel_heros, ...dc_heros] // this is more prefered over concat and it can merge more than two arrays called 'spread operater'
// console.log(all_new_heros);

const new_arr = [1, 2, 3, [4, 5], 6, 7, [8, 9, [10, 11]]]

const new2_arr = new_arr.flat(Infinity)// this used to resolve the nested or complicated array and 'infinity' shows the depth of array
console.log(new2_arr);

console.log(Array.isArray("aryan"));// this is used to find the array or not
console.log(Array.from("aryan"));// this is used to create an array 
console.log(Array.from({name:"aryan"}));// this gives empty array because it doesnt know what to create

let score1 = 100
let score2 = 200 
let score3 = 300

console.log(Array.of(score1, score2, score3));// this is also a method to create array



 





