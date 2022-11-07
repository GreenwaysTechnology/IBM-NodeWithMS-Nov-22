//complex parameters
//success and failure are just variables only 
function login(userName, password, success, failure) {
    // let userName = 'admin'
    // let password = 'admin'
    let status = ''
    if (userName === 'admin' && password === 'admin') {
        //call success
        status = 'Login success'
        success(status)
    } else {
        //call failure
        status = 'Login Failed'
        failure(status)
    }
}
login('admin', 'admin', function (status) {
    console.log(status)
}, function (status) {
    console.log(status)
})
login('foo', 'bar', function (status) {
    console.log(status)
}, function (status) {
    console.log(status)
})


