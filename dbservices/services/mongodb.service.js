const { ServiceBroker } = require("moleculer");
const ApiGateWayService = require("moleculer-web");
const DbService = require('moleculer-db')
const MongoDbAdapter = require('moleculer-db-adapter-mongo')
const Fakerator = require('fakerator');

//Fakerator object we need to create
const fakerator = new Fakerator();

const broker = new ServiceBroker({
    transporter: 'TCP'
});

//service : expose api which talks to database
//in Mememory Database:NeDB.

broker.createService({
    name: 'users',
    mixins: [DbService],
    adapter: new DbService.MemoryAdapter(),
    //adapter: new MongoDbAdapter("mongodb://localhost:27017"),
    collection:'users',
    //column mapping
    settings: {
        fields: ["_id", "firstName", "lastName", "email", "status"],
        pageSize:200
    },
    actions: {

    },
    //life cycle method
    afterConnected() {
        //seeding the database with default data
        this.logger.info('connection started')
    },
    methods: {
        async seedDB() {
            this.logger.info('Seeding User Database starts');
            //generate fake users
            const fakeUsers = fakerator.times(fakerator.entity.user, 200);
            //insert into db
            const insertedUsers = await this.adapter.insertMany(fakeUsers);
            this.logger.info(`Created ${insertedUsers.length}`)
        }
    },
    //service life cycle
    async started() {
        if ((await this.adapter.count()) === 0) {
            await this.seedDB();
        } else {
            this.logger.info(`DB contains ${await this.adapter.count()} users`)
        }
    }
})


broker.createService({
    name: 'ApiGateWayService',
    mixins: [ApiGateWayService],
    settings: {
        routes: [
            {
                path: "/api",
                aliases: {
                },
                autoAliases: true
            }
        ]
    }
})


async function init() {
    try {
        await broker.start();
    }
    catch (e) {
        log(e);
    }
}
init();