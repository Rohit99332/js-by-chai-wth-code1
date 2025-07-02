//objects literals
const mySym=Symbol("key1")
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
console.log(JsUser.greetingTwo)
