/*const myNums=[1,2,3]

const myTotal = myNums.reduce(function (accumalator,currentvalue){
   console.log(`accumalator: ${accumalator} and currentvalue:${currentvalue}`)
    return accumalator + currentvalue
},3)
console.log(myTotal)   */ 

                    //OR

/*const myTotal=myNums.reduce( (accumalator,currentvalue) => accumalator+currentvalue,0)

console.log(myTotal);*/





//Example

const shoppingCart = [
    {
        itemName:"js course",
        price:2999
    },

    {
        itemName:"react course",
        price:1999
    },

    {
        itemName:"app course",
        price:3999
    },

    {
        itemName:"web course",
        price:4999
    },

    {
        itemName:"fullstack course",
        price:5999
    },
]

const priceToPay = shoppingCart.reduce((accumalator,item) => accumalator + item.price,0)
 console.log(priceToPay)