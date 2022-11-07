//literal objects 

let person = {
    //properties
    id: 1, // key:value (value can be any literal)
    name: 'Subramanian',
    city: 'Coimbatore'
}
console.log(`id ${person.id} name ${person.name} ${person.city}`)
person.name = 'Subramanian Murugan'
console.log(`id ${person.id} name ${person.name} ${person.city}`)
//how to introduce methods

let product = {
    id: 1,
    name: 'Phone',
    // calculatePrice: function () {
    //     return 100
    // },
    //arrow syntax
    // calculatePrice: () => {
    //     return 100
    // }
    //es 6 class method syntax
    calculatePrice() {
        return 100
    },
    calculateQty() {
        return 10
    }


}
console.log(`Product details`)
console.log(product.id, product.name, product.calculatePrice(), product.calculateQty())