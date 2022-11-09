const { ServiceBroker } = require('moleculer')
const broker = new ServiceBroker()

//declare service
broker.createService({
    name: 'hello',
    actions: {
        //args
        sayHello(ctx) {
            console.log(ctx)
            const { message } = ctx.params
            //return `${ctx.params.message},MicroService`
            return `${message},MicroService`
        }
    }
})

async function main() {
    try {
        await broker.start()
        const hello = await broker.call('hello.sayHello', { message: 'Hello' })
        console.log(hello)

    }
    catch (err) {
        console.log(err)
    }
}
main()