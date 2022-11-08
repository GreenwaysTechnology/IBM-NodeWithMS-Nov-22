//using timer

function blockMe(message) {
    console.log(message)
}

function delay(callback) {
    //node js high level non blocking api 
    setTimeout(callback, 5000)
}
///////////////////////////////////////////////////////////////////

blockMe('start')
delay(function () {
    console.log('i am delayed')
})
blockMe('end')