const name="rohit"
const repoCount = 50

//console.log(name + repoCount + "Value");


console.log(`hello my name is ${name} and my repo count is ${repoCount}`);


const gameName = new String('rohit')

console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt('4'));
console.log(gameName.indexOf('r'))


const newString = gameName.slice(-2,1)
console.log(newString);


const newStringOne="     rohit    "
console.log(newStringOne);
console.log(newStringOne.trim());


const url="htttp://rohit.in/rohit%20shelar"
console.log(url.replaceAll('r','h'))

console.log(url.includes('rohitt'))