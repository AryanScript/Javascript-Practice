// This code is for learning fitler map and reduce in javascript

const coding = ['JavaScript', 'Python', 'Ruby', 'Java', 'C++']

// const values = coding.forEach((item) => {
//     console.log(item);
//     return item;
// });

// console.log(values); //undefined because forEach does not return anything

const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNum = myNum.filter((num) => {
//     return num > 4;
// });

const newNum = [] //used for using foreach loop to filter the numbers greater than 4
myNum.forEach((num) => {
    if(num > 4) {
        newNum.push(num);
    }
});

console.log(newNum); // [ 5, 6, 7, 8, 9, 10 ]