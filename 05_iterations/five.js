const coding = ["js","ruby","java","python","cpp"]

coding.forEach(function(val){  //in call back function dont give a name to the function
    console.log(val);
})

coding.forEach((item,index,arr)=> {
    console.log(item,index,arr);
})