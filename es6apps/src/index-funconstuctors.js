//constructors

function Person() {
    //properties 
    this.id = 1
    this.name = 'Subramanin'
    //methods
    this.calculateAge = function () {
        return 18
    }
}
//create object 
//person is reference variable
//new is keyword
//Person() is constructor call 
let person = new Person();
console.log(person.id,person.name,person.calculateAge())