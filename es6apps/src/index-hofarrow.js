//function literals with arrow and higher order function
let login = (userName, password, success, failure) => {
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
//simple arrow
login('admin', 'admin', (status) => {
    console.log(status)
}, (status) => {
    console.log(status)
})
//code refactoring
login('admin', 'admin', status => console.log(status), err => console.log(err))
login('foo', 'bar', status => console.log(status), err => console.log(err))


