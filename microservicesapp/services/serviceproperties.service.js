const { ServiceBroker } = require('moleculer')
const broker = new ServiceBroker();

//simulating some webserver settings

const webServer = {
    name: 'webserver',
    //parent properties
    settings: {
        port: 8080,
        host: 'ibm.com'
    }
}
const hello = {
    name: 'hello',
    actions: {
        sayHello() {
            return 'Hello,From Parent';
        }
    }
}
const hai = {
    name: 'hai',
    actions: {
        sayHai() {
            return 'Hai, From Parent'
        }
    }
}
//Child Service
broker.createService({
    name: 'greeter',
    mixins: [hello, hai, webServer],
    settings: {
        port: 3000
    },
    actions: {
        greet: {
            handler(ctx) {
                return `WebServer Port is ${this.settings.port} Host ${this.settings.host}`
            }
        }
    }

})

async function main() {
    try {
        await broker.start()
        broker.repl();
    }
    catch (err) {
        console.log(err);
    }

}
main();