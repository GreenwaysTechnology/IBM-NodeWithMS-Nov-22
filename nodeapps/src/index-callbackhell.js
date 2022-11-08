//callback nesting - async composition
//resolve = success reject=failure
const getUser = (resolve, reject) => {
    console.log('getUser is called')
    let user = {
        name: 'admin'
    }
    //user=undefined
    let error = {
        message: 'User not Found'
    }
    if (user) {
        setTimeout(resolve, 100, user)
    } else {
        setTimeout(reject, 100, error)
    }
}

const login = (user, resolve, reject) => {
    console.log('login is called')
    if (user.name === 'admin') {
        setTimeout(resolve, 100, 'Login Success')
    } else {
        setTimeout(reject, 100, 'Login Failed')
    }
}
const dashboard = (status, resolve, reject) => {
    if (status === 'Login Success') {
        setTimeout(resolve, 100, 'Admin Page')
    } else {
        setTimeout(reject, 100, 'Guest Page')
    }
}
//calling
getUser(user => {
    //call login
    login(user, status => {
        //call dashboard
        dashboard(status, adminPage => console.log(adminPage), err => console.log(err))
    }, err => console.log(err))
}, err => console.log(err))