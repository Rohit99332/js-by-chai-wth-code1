//objects literals
/*const mySym=Symbol("key1")
const JsUser={
    name:"rohit",
    "fullname":"rds",
    [mySym]:"mykey1",
    age:21,
    location:"pune",
    email:"rohit993322@gmail.com",
    isLoggedIn:false,
    lastLoggedinDays:["monday","saturday"]

}

//two ways to declare an objects

//console.log(JsUser.email)
//console.log(JsUser["email"])
//console.log(JsUser["full name"])
//console.log(JsUser[mySym])


JsUser.email="rohit99332@gmail.com"
//Object.freeze(JsUser)
JsUser.email="rohit99@gogle.com"
//console.log(JsUser);

JsUser.greeting=function(){
    console.log("hello JS user");
}

JsUser.greetingTwo=function(){
    console.log(`hello JS user,${this.name}`);

}
console.log(JsUser.greeting);
console.log(JsUser.greetingTwo)*/



//+++++++++++++++++++++++++++++++++++++++++++++++++

//const tinderUser=new )bject()

const tinderUser={}

tinderUser.id="123abc"
tinderUser.name="sammy"
tinderUser.isLoggedIn=false
//console.log(tinderUser)

const regularUser={
    email:"soma@gmail.com",
    fullname: {
        userfullname:{
            firstname:"rohit",
            lastname:"shelar"

        }
    }
}
//console.log(regularUser.fullname.userfullname);

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}

//const obj3={obj1,obj2}

//const obj3=Object.assign(obj1,obj2)
//console.log(obj3);

const obj3={...obj1,...obj2}
//console.log(obj3);

const users=[
    {
    },
    {     
    },
    {      
    },

]

use[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));