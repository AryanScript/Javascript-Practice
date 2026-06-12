// This code is for learning the dates object


let myDate = new Date()
// console.log(myDate.toString());  //this shows the every single details of todays date
// console.log(myDate.toDateString());  //this shows only date not time
// console.log(myDate.toLocaleString());  //this shows date and time both but not same as first one
// console.log(typeof myDate);  //this shows the type of module

// let myCreatedDate = new Date(2026, 2, 7)  //In js month start from 0
// console.log(myCreatedDate.toDateString());
// let myCreatedDate = new Date(2026, 2, 7, 21, 19) //in this we are declaring the date and time both
// console.log(myCreatedDate.toLocaleString());
let myCreatedDate = new Date("08-03-2026")  //this shows in the format of ddmmyy
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()  //it is use to see exact timestamp
// console.log(myTimeStamp);
// console.log(myCreatedDate.getDate());
// console.log(Math.floor(Date.now()/1000)); //in this we are using floor math to avoide decimal value and date now for getting milisecond value of todays date

let newDate = new Date()   
console.log(newDate.getMonth() + 1);  //this will represent the month

// `${newDate.getDay()}and the time`  //using backticks

newDate.toLocaleString('default',{  //in this we can define more than one function 
    weekday: "long"
})

