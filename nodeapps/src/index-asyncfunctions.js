//async function 
async function getValue() {
    return 10 // Promise.resolve(10)
}
function main() {
    console.log(getValue())
}
main()