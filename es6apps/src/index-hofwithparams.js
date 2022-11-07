
//function declaration
function sayHello(hello) {
    //invocation
    hello('subramanian')
}
//invocation
sayHello(function (name) {
    console.log(`hello ${name}`)
})
let myFun = function (name) {
    console.log(`hello ${name}`)
}
sayHello(myFun)