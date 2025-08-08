const descripter = Object.getOwnPropertyDescriptor(Math,"PI")
console.log(descripter);

/* OUTPUT 
due to this reason value of PI is not changable
 value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false*/