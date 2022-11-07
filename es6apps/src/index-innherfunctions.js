//how to return function from another function 

// function counter() {
//     console.log('counter')
//     //inner function 
//     let inc = function () {
//         console.log('inc')
//     }
//     inc()
// }

const counter = () => {
    console.log('counter')
    //inner function 
    let inc = () => {
        console.log('inc')
    }
    inc()
}
counter()
// inc()