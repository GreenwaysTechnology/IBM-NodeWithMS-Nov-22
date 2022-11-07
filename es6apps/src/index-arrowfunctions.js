//es 5 function literal

let hello = function () {
    console.log('hello')
}
hello()
//es 6 arrow functions 
//arrow function keeps code simple and concise 
let hai = () => {
    console.log('hai')
}
hai()
//if function has only one line of body : you can remove {}
hai = () => console.log('hai')
hai()

//arrow functions with args ,parametes
let add = (a = 0, b = 0) => {
    let c = a + b
    console.log(`c ${c}`)
}
add(10, 10)
//how to return values
add = (a = 0, b = 0) => {
    return a + b
}
console.log(add(10, 10))

//if function has only return ; we can remove return and {}
add = (a = 0, b = 0) => a + b
console.log(add(10, 10))

//single parameter,no default value,return the same : remove ()
let getValue = value => value
console.log(getValue(10))
