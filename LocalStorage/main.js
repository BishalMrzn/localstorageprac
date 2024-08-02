let key= prompt("Enter the value for your key")
let value= prompt("Enter the value for your value")
localStorage.setItem(key,value)
console.log(`the value of ${key} is ${localStorage.getItem(key)}`)
// if(valuecity==kathmandu){
//     localStorage.removeItem()
// }
// localStorage.clear()
console.log(localStorage.key(0))