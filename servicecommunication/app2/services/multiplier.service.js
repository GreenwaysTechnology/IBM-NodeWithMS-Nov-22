const { ServiceBroker } = require('moleculer')

// const broker = new ServiceBroker({
//     transporter: "TCP"
// })

const broker = new ServiceBroker({
    transporter:"nats://localhost:4222"
})

broker.createService({
    name: 'multiplier',
    actions: {
        multiply: {
            //param validation logic
            params: {
                a: "number",
                b: "number"
            },
            //biz logic 
            handler(ctx) {
                const a = ctx.params.a
                const b = ctx.params.b
                return a * b
            }
        }
    }
})



async function main() {
    try {
        //start the broker 
        await broker.start()
        //use repl prompt
        broker.repl()

    } catch (err) {
        console.log(err)
    }
}
main()