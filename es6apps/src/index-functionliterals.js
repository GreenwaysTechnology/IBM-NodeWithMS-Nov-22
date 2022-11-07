
//hello is just variable,holding function literal as value 
//hello can be used to invoke that function 
//if function has no name , anonmous function 
let hello = function () {
    //code 
    console.log('hello')
}
hello()

//function literals with args and parameters
let add = function (a = 0, b = 0) {
    let c = a + b
    console.log(`add ${c}`)
}
add(10, 10)
////function literals with args and parameters with return values 

let multiply = function (a = 0, b = 0) {
    return a * b
}
console.log(multiply(10, 10))
