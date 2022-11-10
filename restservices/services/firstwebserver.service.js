const { ServiceBroker } = require('moleculer')
const ApiGateWay = require('moleculer-web')

const broker = new ServiceBroker()

//create ApiGateWayService
// broker.createService(ApiGateWay)

broker.createService({
    name: 'ApiGateWay',
    mixins: [ApiGateWay]
})
async function main() {
    await broker.start();
}
main();