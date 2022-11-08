
function blockMe(message) {
    console.log(message)
}
function getError() {
    //return Promise with success
    return Promise.reject('something went wrong')
}

blockMe('start')
getError().catch(err => console.log(err))
blockMe('end')