/**
 * Get the Service Broker object 
 * Declare Service
 * Start Service/deploy the service on Moleculer runtime-service Broker
 */
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
//deploy the service/start service broker
function main_() {
    //start the service broker , start method returns promise
    broker.start()
        .then(() => {
            console.log('broker is ready')
            //service calls 
            broker.call('hello.sayHello').then(res => {
                console.log(res)
            }).catch(err => {
                console.log('service call failed', err)
            })
        })
        .catch(err => console.log('broker failed to start'))
}
async function main() {
    try {
        await broker.start()
        const res = await broker.call('hello.sayHello')
        console.log(res)
    }
    catch (err) {
        console.log(err)
    }
}
main()