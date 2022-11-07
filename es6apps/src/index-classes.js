//es 6 classes
class Person {
    city = 'Coimbatore'
    constructor(id = 1, name = 'defaultName') {
        //properties 
        this.id = id
        this.name = name
    }
    //methods
    calculateAge() {
        return 18
    }
}
//create object 
//person is reference variable
//new is keyword
//Person() is constructor call 
let person = new Person(1);
//person.city='Coimbatore'
console.log(person.id, person.name, person.calculateAge(),person.city)