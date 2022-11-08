
function blockMe(message) {
    console.log(message)
}
function getMessage() {
    //return Promise with success
    return Promise.resolve('Hello')
}

blockMe('start')
getMessage().then(message => console.log(message))
blockMe('end')