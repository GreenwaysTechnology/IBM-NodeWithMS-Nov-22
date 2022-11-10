const { ServiceBroker } = require('moleculer')

const broker = new ServiceBroker();

broker.createService({
    name: 'math',
    //public methods
    actions: {
        add: {
            params: {
                a: { type: "number", positive: true, integer: true },
                b: { type: "number", positive: true, integer: true }
            },
            handler(ctx) {
                //call private method
                return this.add(ctx)
            }
        },
        multiply: {
            params: {
                a: { type: "number", positive: true, integer: true },
                b: { type: "number", positive: true, integer: true }
            },
            handler(ctx) {
                //call private method
                return this.multiply(ctx)
            }
        }
    },
    //private methods
    methods: {
        add(ctx) {
            return ctx.params.a + ctx.params.b
        },
        multiply(ctx) {
            return ctx.params.a * ctx.params.b
        }
    },
    //life cycle methods
    created() {
        console.log('service is created')
    },
    merged() {
        console.log('service is merged')
    },
    async started() {
        console.log('service is started ')
    },
    async stoped() {
        console.log('service is stopped')
    }
})
async function main() {
    try {
        await broker.start()
        console.log('Broker is Ready!')
        //Use Repl
        await broker.repl()

    }
    catch (err) {
        console.log(err)
    }
}
main()