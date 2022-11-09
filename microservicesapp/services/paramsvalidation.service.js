const { ServiceBroker } = require('moleculer')
const broker = new ServiceBroker()

//declare service
broker.createService({
    name: 'math',
    actions: {
        add: {
            //meta information: validation information
            params: {
                a: { type: 'number' },
                b: { type: 'number' }
            },
            handler(ctx) {
                const { a, b } = ctx.params
                return a + b
            }
        }
    }
})

async function main() {
    try {
        await broker.start()
         const result = await broker.call('math.add', { a: 10, b: 20 })
        // const result = await broker.call('math.add', { a: "10", b: 20 })

        console.log(result)
    }
    catch (err) {
        console.log(err)
    }
}
main()