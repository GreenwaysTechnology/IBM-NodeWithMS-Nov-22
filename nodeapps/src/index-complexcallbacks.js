
const login = (userName, password, success, failure) => {
    if (userName === 'admin' && password === 'admin') {
        setTimeout(success, 1000, 'Login Success')
    } else {
        setTimeout(failure, 1000, 'Login Failed')
    }
}
login('admin', 'admin', status => console.log(status), err => console.log(err))