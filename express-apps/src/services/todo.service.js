const todos = require('../mockdata/todos')

class TodoService {
    constructor() { }
    findAll() {
        return Promise.resolve(todos)
    }
}
module.exports = new TodoService()