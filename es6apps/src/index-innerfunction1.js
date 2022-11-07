//how to return function from another function 



function counter() {
    console.log('counter')
    //inner function 
    function inc() {
        console.log('inc')
    }
    inc()
}
counter()
// inc()