const { ServiceBroker } = require('moleculer')
const todos = require('../mock-data/todos')


const broker = new ServiceBroker({
    serializer: "JSON"
})

//declare service
broker.createService({
    name: 'dashboard',
    actions: {
        //args
        async list(ctx) {
            const response = await ctx.call('todos.listTodos')
            return response
        }
    }
})
broker.createService({
    name: 'todos',
    actions: {
        //args
        listTodos(ctx) {
            return new this.Promise((resolve, reject) => {
                setTimeout(resolve, 5000, JSON.stringify(todos))
            })
        }
    }
})


async function main() {
    try {
        await broker.start()
        broker.repl()
    }
    catch (err) {
        console.log(err)
    }
}
main()