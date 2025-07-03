

/*let a=300
if(true){

    let a=10
    const b =20
console.log("INNER:",a);
}

for(let i=0; i < Array.length;i++){
    const element = Array[i];
}

console.log(a);
*/


//note : the variable scope in browser inspect is diffrent and the variable scope in this is different


function one(){
    const username="rohit"
    function two(){
        const website="youtube"
        console.log(username);
    }
    //console.log(website);
    two()
}

//one()

if (true){
    const username = "rohit"
    if(username === "rohit"){
        const website = "youtube"
       // console.log(username + website);
    }
}


//+++++++++++++++++++++++++++++

function addone(num){
    return num+1
}

console.log(addone(5))

function addone(num){
    return num + 1

}

const addTwo = function(num){
    return num + 2
}
addTwo(5)
