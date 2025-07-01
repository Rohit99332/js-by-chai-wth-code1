/*const myArr = [0,1,2,3,4,]

const myHeroes=["shaktiman","tony"]

constmyArr2=new Array(1,2,3,4)
console.log(myArr[1]);

myArr.push(6)
myArr.push(7)
myArr.pop()
console.log(myArr);

myArr.unshift(9)
myArr.shift()
console.log(myArr);

//slice and splice

console.log("A",myArr);

const myn1=myArr.slice(1,3)

console.log(myn1);
console.log("B",myArr);

const myn2=myArr.splice(1,3)
console.log(myn2);*/


//+++++++++++++++++++++++++++++++++

const marvel_heros=["thor","ironman","spiderman"]
const dc_heros = ["superman","flash"]
//marvel_heros.push(dc_heros)
//console.log(marvel_heros);

//const allHeros=marvel_heros.concat(dc_heros)
//console.log(allHeros);
const all_new_heros=[...marvel_heros,...dc_heros]
console.log(all_new_heros);


console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
