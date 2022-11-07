//function args and parameters -default args
//a and b are args
function add(a = 0, b = 0) {
    console.log(`a ${a} b ${b}`)
    let c = a + b
    console.log(`The Result is ${c}`)
}
//passing parameters -10,10
add(10, 10)
add() // undefined,undefined