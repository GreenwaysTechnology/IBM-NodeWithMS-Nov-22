const { ServiceBroker } = require('moleculer')
const broker = new ServiceBroker()

//declare service
broker.createService({
    name: 'math',
    //public methods
    actions: {
        //args
        add: {
            handler(ctx) {
                return this.addNos(ctx.params.a, ctx.params.b)
            }
        }
    },
    methods: {
        addNos(a, b) {
            return a + b
        }
    }
})

async function main() {
    try {
        await broker.start()
        const res = await broker.call('math.add', { a: 1, b: 2 })
        console.log(res)

    }
    catch (err) {
        console.log(err)
    }
}
main()