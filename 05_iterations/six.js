const myNums= [1,2,3,4,5,6,7,8,9,10]

/*const newNums = myNums.filter( (num) => {
    return num >  4
})
console.log(newNums);


const newNums = []
myNums.forEach((num) => {
    if (num >4){
        newNums.push(num)
    }
})

console.log(newNums);*/

///map function
const myNumbers = [1,2,3,4,5,6,7,8,9,10]
/*const  newNums = myNumbers.map( (num) => {
    return num+10
})*/

const newNums = myNumbers
              .map((num) => num*10)
              .map((num) => num + 1 )

console.log(newNums)

