//person is just variable
//person value is object which exported from mylib.js file 

const person = require('./mylib') // function which returns object(code)
console.log(person)

console.log(person.firstName)
console.log(person.getCity())