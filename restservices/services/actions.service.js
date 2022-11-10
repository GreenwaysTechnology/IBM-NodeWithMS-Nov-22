const { ServiceBroker } = require('moleculer')
const ApiGateWay = require('moleculer-web')

const broker = new ServiceBroker({
    transporter:'TCP'
})

//Back end Service
broker.createService({
    name: 'hello',
    actions: {
        sayHello: {
            handler(ctx) {
                return 'Hello,REST Service'
            }
        }
    }
})


//Gate Way Service
broker.createService({
    name: 'ApiGateWay',
    mixins: [ApiGateWay]
})
async function main() {
    await broker.start();
}
main();