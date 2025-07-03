/*function addTwoNumbers(number1,number2){
    //let result = number1+number2
    //return result or we can use below method


    return number1+number2

}

const result=addTwoNumbers(3,5)

//console.log("Result",result);

function loginUserMessage(username) {
    if(username===undefined){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in` 
}

//console.log(loginUserMessage("rohit"))

console.log(loginUserMessage())*/


//+++++++++++++++++++++++++++++++++++++++++++++++

function calculateCartPrice(val1,val2,...num1){
    return num1
}

console.log(calculateCartPrice(200,400,500,2000))

const user = {
    username:"rohit",
    price:199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
//handleObject(user)

handleObject({
    username:"sam",
    price:299
})

const myNewArray=[200,3000,400]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));






