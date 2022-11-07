//how to return values

let a
let b

function add(a = 1, b = 1) {
    console.log(`a ${a} b ${b}`)
    let c = a + b
    return c;
}
//passing parameters -10,10
console.log(add(10, 10))
console.log(add(a, b)) // undefined,undefined
console.log(add(undefined, undefined))
console.log(add())


function multiple(a = 1, b = 1) {
    return a * b
}
console.log(multiple(10, 10))

function login(userName = '', password = '') {
    if (userName === 'admin' && password === 'admin') {
         return true
    }
    return; // undefined
}
login('admin','admin') ? console.log('login success') : console.log('login failed') 
login() ? console.log('login success') : console.log('login failed') 