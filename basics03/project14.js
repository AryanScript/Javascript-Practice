// This code is for learning the immediatly invoked function expression(IIFE)

(function chai() {// we use the double ()() to remove the pollution of global scope we use (IIFE)
    console.log(`DB connected`);
    
})();// we use ; to end the function. this is called as named IIFE

((name) => {// this is the way to pass the parameter
    console.log(`DB connected ${name}`);
    
})("Aryan");// this is called as unnamed IIFE
