//how to return function from another function 

// function counter() {
//     console.log('counter')
//     //inner function 
//     let inc = function () {
//         console.log('inc')
//     }
//     return inc 
// }
// function counter() {
//     console.log('counter')
//     //inner function 
//     return function () {
//         console.log('inc')
//     }

// }

// const counter = () => {
//     console.log('counter')
//     //inner function 
//     return () => console.log('inc')

// }

const counter = () => () => console.log('inc')


// const res = counter()
// console.log(res)
// res()
//short cut 
counter()()
