//when we pass object as parameter to function 

//without destructuring
// function display(person) {
//     console.log(`id ${person.id}`)
//     console.log(`name ${person.name}`)
//     console.log(`city ${person.address.city}`)
// }

// function display(person) {
//     const { id, name, address: { city } } = person
//     console.log(`id ${id}`)
//     console.log(`name ${name}`)
//     console.log(`city ${city}`)
// }
// const display = (person) => {
//     const { id, name, address: { city } } = person
//     console.log(`id ${id}`)
//     console.log(`name ${name}`)
//     console.log(`city ${city}`)
// }
const display = ({ id, name, address: { city } }) => {
    console.log(`id ${id}`)
    console.log(`name ${name}`)
    console.log(`city ${city}`)
}
display({ id: 1, name: 'subramanian', address: { city: 'coimbatore' } })