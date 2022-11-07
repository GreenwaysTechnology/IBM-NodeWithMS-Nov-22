//function literals and higher order function
let login = function (userName, password, success, failure) {
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


