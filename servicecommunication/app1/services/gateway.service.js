const { ServiceBroker } = require("moleculer");
const ApiGateWayService = require("moleculer-web");

const broker = new ServiceBroker({
    transporter: 'TCP',
    registry: {
        discoverer: "redis://localhost:6379"
    }
})

broker.createService({
    name: 'APIGateWay',
    mixins: [ApiGateWayService],
    settings: {
        routes: [{
            path: '/api',
            aliases: {
            },
            autoAliases: true
        }]
    }
})

async function main() {
    try {
        await broker.start();
    }
    catch (e) {
        log(e);
    }
}
main()