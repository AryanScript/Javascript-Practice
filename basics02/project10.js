//  This code is for learning about the objects

// object literals

// const mySm = Symbol("key1")

// const newUser = {
//     name: "Aryan",
//     "full name": "Aryan Singh",
//     [mySm]: "key1",// this is the way of delcaring the symbol datatype
//     location: "Jaipur",
//     email: "arya@gmail.com",
//     age: 19,
//     isLoggedin: false,
//     lastLoggedin: ["monday", "saturday"]

// }

// console.log(newUser.email);// this is the not a proper method to call
// console.log(newUser["email"]);// this is called keyed way to call
// console.log(newUser["full name"]);
// console.log(newUser[mySm]);

// newUser.email = "aryan.gg@google.com"// this method we can change the value or information in object
// Object.freeze(newUser)// this will freeze or lock the object for the further changes
// newUser.email = "as.gmail.com"
// console.log(newUser);

// newUser.greeting = function(){
//     console.log("hello newuser");
    
// }
// newUser.greetingTwo = function(){
//     console.log(`hello newuser, ${this.name}`);
    
// }
// console.log(newUser.greeting);// this will show only the reference not the execution the function
// console.log(newUser.greeting());// this will execute the function
// console.log(newUser.greetingTwo());


// Note => in most of the cases we use . method to call the inner properties of object in only rare case or no other option we use [] method

// ===================================================== part 2 =================================================================================

// Sinlgeton object(or by the use of constructor)

// const instaUser = new Object()// this is a singleton object
// const instaUser = {}// this is not a singleton object but used as constructor

// instaUser.id = "1234fhg"
// instaUser.name = "aryan"
// instaUser.isloggedin = false

// console.log(instaUser);

// const yUser = {              // this is for excessing of nested object
//     email: "arya45@gmail.com",
//     fullname: {
//         username: {
//             firstname: "Aryan",
//             lastname: "Singh"
//         }
//     }
// }

// console.log(yUser.fullname.username.firstname);// this will excess every object one by one

// const obj1 = {1: "a", 2: "b"}
// const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1,obj2}// this will cause object under object like array

// const obj3 = Object.assign({}, obj1, obj2)// this is the correct way and {} it returns modified target object. This method is also not used frequently 

// const obj3 = {...obj1, ...obj2}// this way used mostly

// console.log(obj3);

// const user = [         // this is for when objects are in array
//     {
//         id: 1,
//         email: "hg@gmail.com"
//     },
//     {
//         id: 1,
//         email: "hg@gmail.com"
//     },
//     {
//         id: 1,
//         email: "hg@gmail.com"
//     }
// ]

// user[1].email
// console.log(instaUser);

// console.log(Object.keys(instaUser));// this is fr excessing the keys from object
// console.log(Object.values(instaUser));// this is for excessing values from object
// console.log(Object.entries(instaUser));// this is used for merging keys and values in array 

// console.log(instaUser.hasOwnProperty(isloggedin));// this is for checking the existence 

// ======================================================= part 3 ======================================================================

// learning about object destructure

const course = {
    courseName: "js my",
    price: "999",
    tutor: "aryan"
}

const {tutor: teacher} = course// this is the method of calling the keys and there value. 'const {tutor: teacher}' this can change the name of key easily
console.log(teacher);

