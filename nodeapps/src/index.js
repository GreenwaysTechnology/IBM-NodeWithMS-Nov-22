//promise chaning --sovling callback hell

const getUser = () => {
    console.log('getUser is called')
    let user = {
        name: 'admin'
    }
    //user = undefined
    let error = {
        message: 'User not Found'
    }
    return new Promise((resolve, reject) => {
        if (user) {
            setTimeout(resolve, 100, user)
        } else {
            setTimeout(reject, 100, error)
        }
    })
}

const login = user => {
    console.log('login is called')
    return new Promise((resolve, reject) => {
        if (user.name === 'admin') {
            setTimeout(resolve, 100, 'Login Success')
        } else {
            setTimeout(reject, 100, 'Login Failed')
        }
    })
}
const dashboard = status => {
    return new Promise((resolve, reject) => {
        if (status === 'Login Success') {
            setTimeout(resolve, 100, 'Admin Page')
        } else {
            setTimeout(reject, 100, 'Guest Page')
        }
    })
}

async function main() {
    // getUser()
    //     .then(user => login(user))
    //     .then(status => dashboard(status))
    //     .then(page => console.log(page))
    //     .catch(err => console.log(err))

    try {
        const user = await getUser()
        const status = await login(user)
        const page = await dashboard(status)
        console.log(user, status, page)
    }
    catch (err) {
        console.log(err)
    }
}
main()
