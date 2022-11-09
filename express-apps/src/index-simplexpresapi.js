const express = require('express')
// console.log(express)
//create application object
const app = express()

//console.log(app) 
//apis 
//home page
app.get('/', (req, res) => {
    res.end('Home')
})
//todos 
app.get('/api/todos', (req, res) => {
    res.end('todos')
})
app.post('/api/todos', (req, res) => {
    res.end('todos post')
})
app.put('/api/todos', (req, res) => {
    res.end('todos put')
})
app.delete('/api/todos', (req, res) => {
    res.end('todos delete')
})
//users
app.get('/api/users', (req, res) => {
    res.end('users')
})
app.post('/api/users', (req, res) => {
    res.end('users post')
})

app.put('/api/users', (req, res) => {
    res.end('users put')
})
app.delete('/api/users', (req, res) => {
    res.end('users delete')
})
//start express server
app.listen(3000, () => {
    console.log('Express Server is listening')
})