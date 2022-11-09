const { ServiceBroker } = require('moleculer')
//create instance of service broker
const broker = new ServiceBroker()

//declare service
broker.createService({
    name: 'hello',
    actions: {
        sayHello() {
            return 'Hello,MicroService'
        }
    }
})
broker.createService({
    name: 'hai',
    actions: {
        sayHai() {
            return 'Hai,MicroService'
        }
    }
})
async function main() {
    try {
        await broker.start()
        const hello = await broker.call('hello.sayHello')
        console.log(hello)
        const hai = await broker.call('hai.sayHai')
        console.log(hai)
    }
    catch (err) {
        console.log(err)
    }
}
main()