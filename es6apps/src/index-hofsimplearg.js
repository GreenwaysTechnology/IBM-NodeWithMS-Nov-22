//higher order functions 
//a and b are just variables, can hold value
function add(a, b) {
    return a + b
}
//pass values
console.log(add(10, 10))
//passing variables
let x = 10
let y = 10
console.log(add(x, y)) // add(10,10)
////////////////////////////////////////////////////////////////////////////////////

let foo = function(){

}
foo()


//hello is variable can hold functions 
/**
 * 
 * let bar = function(){}
 * bar()
 * 
 * let bar = myFun
 * let bar =function() {
}
  bar()
 */

function sayHello(bar) {
  bar()
}
//bar is just variable going to hold function
sayHello(function(){})

let myFun = function() {

}
sayHello(myFun)
