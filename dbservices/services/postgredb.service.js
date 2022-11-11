
const { ServiceBroker } = require("moleculer");
const DbService = require("moleculer-db");
const SqlAdapter = require("moleculer-db-adapter-sequelize");
const Sequelize = require("sequelize");
const ApiGateWayService = require("moleculer-web");

const broker = new ServiceBroker();

// Create a Sequelize service for `post` entities
broker.createService({
    name: "posts",
    mixins: [DbService],
    adapter: new SqlAdapter("postgres://postgres:postgres@localhost/postgres"),
    model: {
        name: "post",
        define: {
            title: Sequelize.STRING,
            content: Sequelize.TEXT,
            votes: Sequelize.INTEGER,
            author: Sequelize.INTEGER,
            status: Sequelize.BOOLEAN
        },
        options: {
            // Options from https://sequelize.org/docs/v6/moved/models-definition/
        }
    },
});

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



function main() {
    broker.start()
        // Create a new post
        .then(() => broker.call("posts.create", {
            title: "My first post",
            content: "Lorem ipsum...",
            votes: 0
        }))

        // Get all posts
            .then(() => broker.call("posts.find").then(console.log));
}
main()