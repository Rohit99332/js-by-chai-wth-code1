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


function chai(){
    console.log(this);
}