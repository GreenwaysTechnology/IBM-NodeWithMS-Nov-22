//literal objects with nesting - has a 

let address = {
    street: '3 rd street',
    city: 'Coimbatore',
    state: 'Tamil Nadu'
}

let person = {
    id: 1,
    name: 'Subramanian',
    // address: {
    //     street: '3 rd street',
    //     city: 'Coimbatore',
    //     state: 'Tamil Nadu'
    // }
    address: address
}
console.log(person.id, person.name, person.address.street, person.address.city)
console.log(person.address)

// classes has-a 

class OrderService {
    constructor() {

    }
    findAll() {
        return 'Orders'
    }
}
class OrderController {
    constructor(orderService) {
        this.orderService = orderService
    }
    init() {
        console.log(this.orderService.findAll())
    }
}
let orderCtrl = new OrderController(new OrderService())
orderCtrl.init()
