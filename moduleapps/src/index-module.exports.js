const UserService = require('./services/user.service')
console.log(UserService)
let userService = new UserService()
console.log(userService.findAll())
console.log(userService.save())

//with destrcturing
let { findAll, save, remove } = new UserService()
console.log(findAll())
console.log(save())
console.log(remove())