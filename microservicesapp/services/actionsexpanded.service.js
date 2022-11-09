const { ServiceBroker } = require('moleculer')
const broker = new ServiceBroker()

//declare service
broker.createService({
    name: 'hello',
    actions: {
        //args
        // sayHello(ctx) {
        //     console.log(ctx)
        //     const { message } = ctx.params
        //     //return `${ctx.params.message},MicroService`
        //     return `${message},MicroService`
        // }
        //expanded syntax
        sayHello: {
            //logic of the method will go inside handler
            handler(ctx) {
               const { message } = ctx.params
               return `${message} MicroService`
            }
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