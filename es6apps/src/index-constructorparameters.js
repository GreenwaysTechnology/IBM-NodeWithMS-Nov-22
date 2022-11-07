//constructors
function Person(id = 1, name = '') {
    //properties 
    this.id = id
    this.name = name
    //methods
    this.calculateAge = function () {
        return 18
    }
}
//create object 
//person is reference variable
//new is keyword
//Person() is constructor call 
let person = new Person(1, 'subramaian');
console.log(person.id, person.name, person.calculateAge())