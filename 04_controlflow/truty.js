const userEmail = []  // "rohit@gmail.com"

if (userEmail){
    console.log("Got user email")
} else{
    console.log("dont have email")
}



//truthy values =>"0",'false'," ",[],{},function(){}


//falsy values => false,0,-0,BigInt 0n,null,undefined,NaN,"".



if (userEmail.length === 0){
    console.log("Array is empty");
}

//Nullish coalescing operator
let val1;
val1= null ?? 10      //(??)= Nullish Coalescing Operator specially use for null and undefined value 
val2= 5??4
console.log(val1);
console.log(val2);

//Terniary operator (?)

const iceTeaPrice= 10
iceTeaPrice<= 80 ? console.log("less than 80") : console.log("more than 80")


