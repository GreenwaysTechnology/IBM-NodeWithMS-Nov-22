const express = require('express')
const app = express()
const todosRouter = require('./routers/todos.router')

//configure routers with app object so that , request will be dispatched to routers

app.use('/api/todos',todosRouter)

//Global apis 
app.get('/', (req, res) => {
    res.end('Home')
})

//start express server
app.listen(3000, () => {
    console.log('Express Server is listening')
})