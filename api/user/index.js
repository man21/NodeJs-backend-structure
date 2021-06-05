const userRoutes = require("./config/user.route")
const userController = require('./controller/user.controller')
const userModel = require('./model/user.model')
// const userModelHook = require('./model/user.hook')
const userService = require('./service/user.service')

module.exports ={
    userRoutes,
    userController,
    userModel,
    userService
}