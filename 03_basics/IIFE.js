//immedietly invoked function expression (IIFE)
//it is use to remome pollution of globle scope  variable or scope 

(function chai(){          //named IIFE
    console.log(`DB CONNECTED`);
})();
( ()=>{
    console.log(`DB CONNECTED TWO`);
})();

( (name) => {     //unnamed IIFE
    console.log(`DB CONNECTED TWO ${name}`);
})('rohit')