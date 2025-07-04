const user = {
    username: "rohit",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username},welcome to website`);
        console.log(this)
     }
}


// This keyword is use to refer current content
user.welcomeMessage()
user.username ="rds"
user.welcomeMessage()


//function chai(){
   // let username = "rohit"
   // console.log(this.username);
//}

const chain= () => {
    let username = "rohit"
    console.log(this);
}
//chai()

//const addTwo = (num1,num2) =>{
  //  return num1 + num2
//}      OR

const addTwo = (num1,num2) =>  num1 + num2
console.log(addTwo(3,4))



// note :in an arrow function if we use curly braces then
// you have to use return keyword but if we use paranthesis
//then no need to use retun keyword ,,for printing an object you have to use paranthesis compulsary

