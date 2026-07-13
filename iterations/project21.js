// This code is for learning for each loop in javascript

const coding = ['JavaScript', 'Python', 'Ruby', 'Java', 'C++']

// coding.forEach(function (val) {
//     console.log(val);
// });

// coding.forEach((item) => { //arrow function
//     console.log(item);
// });

// function printMe(item) {
//     console.log(item);
// }

// coding.forEach(printMe); //passing function as a parameter to forEach loop

// coding.forEach((item, index, arr) => { //arrow function with index
//     console.log(item , index, arr);
// });

const myCcoding = [
    {
        langName: 'JavaScript',
        fileExtension: '.js'
    },
    {

        langName: 'Python',
        fileExtension: '.py'
    },
    {
        langName: 'Ruby',
        fileExtension: '.rb'    
    }
]

myCcoding.forEach( (item) => {
    console.log(item.langName);
});