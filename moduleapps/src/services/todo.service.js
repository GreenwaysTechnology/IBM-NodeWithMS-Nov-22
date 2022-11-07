const TODOS = require("../mock-data/todos")

class TodoService {
    constructor() { }
    findAll() {
        return TODOS
    }
}
module.exports = new TodoService() // share object directly