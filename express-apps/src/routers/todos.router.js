const express = require('express')
const { findAll } = require('../services/todo.service')

const todoRouter = express.Router()

//GET /api/todos
todoRouter.get('', async (req, res) => {
    try {
        const todos = await findAll()
        res.status(200).json(todos)
    }
    catch (err) {
        res.status(400).json(err)
    }

})
//GET /api/todos/list
todoRouter.get('/list', async (req, res) => {
    try {
        const todos = await findAll()
        res.status(200).json(todos)
    }
    catch (err) {
        res.status(400).json(err)
    }

})
//GET /api/todos/save
todoRouter.post('/save', (req, res) => {
    res.end('todos post')
})
//GET /api/todos/update
todoRouter.put('/update', (req, res) => {
    res.end('todos put')
})
//GET /api/todos/update
todoRouter.delete('/remove', (req, res) => {
    res.end('todos delete')
})

module.exports = todoRouter