new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000)
}) .then(function(){
    console.log("Async 2 resolved");
})



const promiseThree = new Promise(function(resolve , reject){
    setTimeout(function(){
   resolve({ username: "chai",email:"rds@gmail.com"})
    } , 1000)
})

promiseThree.then(function(user){
    console.log(user);
})



const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if (!error){
            resolve({username:"javascript",password:"123"})

        }else{
            reject('ERROR:JS went wrong')
        }
    } ,1000)
});

async function consumePromiseFive() {
    const response = await promiseFive()
    console.log(response);
}