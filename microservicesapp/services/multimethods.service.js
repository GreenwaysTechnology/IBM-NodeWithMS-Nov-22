const { ServiceBroker } = require('moleculer')
//create instance of service broker
const broker = new ServiceBroker()

//declare service
broker.createService({
    name: 'greeter',
    actions: {
        sayHello() {
            return 'Hello,MicroService'
        },
        sayHai(){
            return 'Hai,Micro Service'
        },
        sayGreet(){
            return 'Greet,Mico Service'
        }
    }
})

async function main() {
    try {
        await broker.start()
        const hello = await broker.call('greeter.sayHello')
        console.log(hello)
        const hai = await broker.call('greeter.sayHai')
        console.log(hai)
        const greet = await broker.call('greeter.sayGreet')
        console.log(greet)

    
    }
    catch (err) {
        console.log(err)
    }
}
main()